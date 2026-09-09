import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..", "..");
const sceneSourceDirectory = path.join(projectRoot, "scenes", "development", "dev01-scene-pipeline");
const sceneYamlPath = path.join(sceneSourceDirectory, "scene.yaml");
const blueprintPath = path.join(sceneSourceDirectory, "map", "blueprint.json");
const runtimeMapDirectory = path.join(projectRoot, "foundry-module", "ashen-gauntlet", "assets", "maps", "development");
const runtimeSceneDirectory = path.join(projectRoot, "foundry-module", "ashen-gauntlet", "content", "development", "scenes");
const runtimeMapPath = path.join(runtimeMapDirectory, "dev01-scene-pipeline.svg");
const runtimeScenePath = path.join(runtimeSceneDirectory, "dev01-scene-pipeline.json");

/**
 * <summary>Reads a top-level YAML scalar. Input: YAML text and scalar key.</summary>
 */
function readYamlScalar(yamlText, key)
{
    const prefix = `${key}:`;
    const lines = yamlText.split(/\r?\n/);
    for (const line of lines)
    {
        if (line.startsWith(prefix))
        {
            return line.slice(prefix.length).trim();
        }
    }

    throw new Error(`Missing YAML scalar: ${key}`);
}

/**
 * <summary>Escapes text for SVG output. Input: untrusted authored text.</summary>
 */
function escapeXml(value)
{
    return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

/**
 * <summary>Finds an authored map area. Input: blueprint areas and area ID.</summary>
 */
function findArea(areas, areaId)
{
    for (const area of areas)
    {
        if (area.id === areaId)
        {
            return area;
        }
    }

    throw new Error(`Unknown blueprint area: ${areaId}`);
}

/**
 * <summary>Calculates an area center. Input: blueprint area and grid size.</summary>
 */
function getAreaCenter(area, gridSize)
{
    return { x: (area.x + (area.width / 2)) * gridSize, y: (area.y + (area.height / 2)) * gridSize };
}

/**
 * <summary>Selects a diagnostic area color. Input: authored area type.</summary>
 */
function getAreaColor(areaType)
{
    if (areaType === "entrance")
    {
        return "#315c46";
    }

    if (areaType === "exit")
    {
        return "#6b4936";
    }

    return "#3e4854";
}

/**
 * <summary>Builds the diagnostic SVG map. Input: scene title and map blueprint.</summary>
 */
function createDiagnosticSvg(sceneTitle, blueprint)
{
    const gridSize = blueprint.grid.size;
    const pixelWidth = blueprint.dimensions.width * gridSize;
    const pixelHeight = blueprint.dimensions.height * gridSize;
    const svg = [];

    svg.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${pixelWidth} ${pixelHeight}" width="${pixelWidth}" height="${pixelHeight}">`);
    svg.push("<rect width=\"100%\" height=\"100%\" fill=\"#171b20\"/>");
    svg.push("<g stroke=\"#2b323a\" stroke-width=\"2\" opacity=\"0.9\">");
    for (let x = 0; x <= pixelWidth; x += gridSize)
    {
        svg.push(`<line x1="${x}" y1="0" x2="${x}" y2="${pixelHeight}"/>`);
    }
    for (let y = 0; y <= pixelHeight; y += gridSize)
    {
        svg.push(`<line x1="0" y1="${y}" x2="${pixelWidth}" y2="${y}"/>`);
    }
    svg.push("</g>");

    for (const connection of blueprint.connections)
    {
        const from = getAreaCenter(findArea(blueprint.areas, connection.from), gridSize);
        const to = getAreaCenter(findArea(blueprint.areas, connection.to), gridSize);
        if (connection.type === "secret")
        {
            svg.push(`<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="#d66ad6" stroke-width="70" stroke-dasharray="45 35" opacity="0.9"/>`);
            svg.push(`<text x="${(from.x + to.x) / 2}" y="${(from.y + to.y) / 2}" fill="#ffd1ff" font-family="sans-serif" font-size="34" text-anchor="middle">SECRET</text>`);
        }
        else
        {
            svg.push(`<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="#89939d" stroke-width="180"/>`);
        }
    }

    for (const area of blueprint.areas)
    {
        const x = area.x * gridSize;
        const y = area.y * gridSize;
        const width = area.width * gridSize;
        const height = area.height * gridSize;
        const center = getAreaCenter(area, gridSize);
        svg.push(`<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="24" fill="${getAreaColor(area.type)}" stroke="#d4d8dc" stroke-width="12"/>`);
        svg.push(`<text x="${center.x}" y="${center.y}" fill="#ffffff" font-family="sans-serif" font-size="42" font-weight="700" text-anchor="middle">${escapeXml(area.id)}</text>`);
    }

    for (const terrain of blueprint.terrain)
    {
        const area = findArea(blueprint.areas, terrain.area);
        const center = getAreaCenter(area, gridSize);
        svg.push(`<g fill="#a68b64" stroke="#332b22" stroke-width="8"><circle cx="${center.x - 115}" cy="${center.y + 105}" r="44"/><circle cx="${center.x - 30}" cy="${center.y + 135}" r="58"/><circle cx="${center.x + 70}" cy="${center.y + 100}" r="38"/><circle cx="${center.x + 130}" cy="${center.y + 145}" r="52"/></g>`);
        svg.push(`<text x="${center.x}" y="${center.y + 245}" fill="#ead8bd" font-family="sans-serif" font-size="32" text-anchor="middle">${escapeXml(terrain.id)}</text>`);
    }

    svg.push(`<rect x="20" y="20" width="650" height="120" rx="12" fill="#0d1014" fill-opacity="0.85" stroke="#747f89" stroke-width="4"/>`);
    svg.push(`<text x="50" y="68" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="700">${escapeXml(sceneTitle)}</text>`);
    svg.push("<text x=\"50\" y=\"112\" fill=\"#b8c0c8\" font-family=\"sans-serif\" font-size=\"26\">Diagnostic map generated from blueprint.json</text>");
    svg.push("</svg>");
    return `${svg.join("\n")}\n`;
}

/**
 * <summary>Builds a Foundry V13 Scene payload. Input: authored identity, blueprint, and source hash.</summary>
 */
function createRuntimeScene(sceneId, sceneTitle, blueprint, sourceHash)
{
    return {
        name: sceneTitle,
        width: blueprint.dimensions.width * blueprint.grid.size,
        height: blueprint.dimensions.height * blueprint.grid.size,
        padding: 0,
        background: {
            src: `modules/ashen-gauntlet/assets/maps/development/${sceneId}.svg`
        },
        backgroundColor: "#171b20",
        grid: {
            type: 1,
            size: blueprint.grid.size,
            distance: blueprint.grid.distance,
            units: blueprint.grid.units,
            color: "#d4d8dc",
            alpha: 0.25
        },
        navigation: false,
        tokenVision: false,
        flags: {
            "ashen-gauntlet": {
                sourceId: sceneId,
                sourceHash,
                sourcePath: `scenes/development/${sceneId}/scene.yaml`,
                blueprintPath: `scenes/development/${sceneId}/map/blueprint.json`,
                developmentContent: true
            }
        }
    };
}

/**
 * <summary>Generates runtime development artifacts. Input: canonical dev01 scene sources.</summary>
 */
function main()
{
    const sceneYaml = fs.readFileSync(sceneYamlPath, "utf8");
    const blueprintText = fs.readFileSync(blueprintPath, "utf8");
    const blueprint = JSON.parse(blueprintText);
    const sceneId = readYamlScalar(sceneYaml, "id");
    const sceneTitle = readYamlScalar(sceneYaml, "title");
    const sourceHash = crypto.createHash("sha256").update(sceneYaml).update("\n").update(blueprintText).digest("hex");
    const sceneIdsMatch = sceneId === blueprint.id;

    if (sceneIdsMatch == false)
    {
        throw new Error(`Scene ID ${sceneId} does not match blueprint ID ${blueprint.id}.`);
    }

    fs.mkdirSync(runtimeMapDirectory, { recursive: true });
    fs.mkdirSync(runtimeSceneDirectory, { recursive: true });
    fs.writeFileSync(runtimeMapPath, createDiagnosticSvg(sceneTitle, blueprint), "utf8");
    fs.writeFileSync(runtimeScenePath, `${JSON.stringify(createRuntimeScene(sceneId, sceneTitle, blueprint, sourceHash), null, 2)}\n`, "utf8");
    console.info(`Generated ${path.relative(projectRoot, runtimeMapPath)}`);
    console.info(`Generated ${path.relative(projectRoot, runtimeScenePath)}`);
}

main();
