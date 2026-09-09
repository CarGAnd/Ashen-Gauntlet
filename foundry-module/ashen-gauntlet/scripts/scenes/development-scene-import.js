const MODULE_ID = "ashen-gauntlet";
const DEVELOPMENT_PACK_NAME = "ashen-gauntlet-development-scenes";
const DEVELOPMENT_PACK_LABEL = "The Ashen Gauntlet - Development Scenes";
const DEVELOPMENT_PACK_COLLECTION = `world.${DEVELOPMENT_PACK_NAME}`;
const DEVELOPMENT_SCENE_DATA_PATH = "modules/ashen-gauntlet/content/development/scenes/dev01-scene-pipeline.json";

/**
 * <summary>Loads the generated Scene payload. Input: bundled development content path.</summary>
 */
async function loadDevelopmentSceneData()
{
    const response = await fetch(DEVELOPMENT_SCENE_DATA_PATH, { cache: "no-store" });
    if (response.ok == false)
    {
        throw new Error(`Unable to load ${DEVELOPMENT_SCENE_DATA_PATH}: HTTP ${response.status}`);
    }

    return response.json();
}

/**
 * <summary>Gets or creates the development Scene pack. Input: stable pack metadata.</summary>
 */
async function getOrCreateDevelopmentScenePack()
{
    let pack = game.packs.get(DEVELOPMENT_PACK_COLLECTION);
    if (pack == null)
    {
        pack = await foundry.documents.collections.CompendiumCollection.createCompendium({ name: DEVELOPMENT_PACK_NAME, label: DEVELOPMENT_PACK_LABEL, type: "Scene" });
    }

    return pack;
}

/**
 * <summary>Finds a Scene by authored identity. Input: pack and authored scene ID.</summary>
 */
async function findSceneBySourceId(pack, sourceId)
{
    const scenes = await pack.getDocuments();
    for (const scene of scenes)
    {
        if (scene.getFlag(MODULE_ID, "sourceId") === sourceId)
        {
            return scene;
        }
    }

    return null;
}

/**
 * <summary>Creates or updates the generated Scene. Input: pack and Scene payload.</summary>
 */
async function upsertDevelopmentScene(pack, sceneData)
{
    const sourceId = sceneData.flags[MODULE_ID].sourceId;
    const sourceHash = sceneData.flags[MODULE_ID].sourceHash;
    const existingScene = await findSceneBySourceId(pack, sourceId);

    if (existingScene == null)
    {
        if (pack.locked)
        {
            throw new Error(`The compendium ${DEVELOPMENT_PACK_LABEL} is locked.`);
        }

        const createdScenes = await pack.documentClass.createDocuments([sceneData], { pack: pack.collection });
        return { action: "created", sceneName: createdScenes[0].name };
    }

    if (existingScene.getFlag(MODULE_ID, "sourceHash") === sourceHash)
    {
        return { action: "unchanged", sceneName: existingScene.name };
    }

    if (pack.locked)
    {
        throw new Error(`The compendium ${DEVELOPMENT_PACK_LABEL} is locked.`);
    }

    await existingScene.update(sceneData);
    return { action: "updated", sceneName: existingScene.name };
}

/**
 * <summary>Synchronizes generated development content. Input: active Foundry World.</summary>
 */
export async function synchronizeDevelopmentSceneCompendium()
{
    const sceneData = await loadDevelopmentSceneData();
    const pack = await getOrCreateDevelopmentScenePack();
    return upsertDevelopmentScene(pack, sceneData);
}

