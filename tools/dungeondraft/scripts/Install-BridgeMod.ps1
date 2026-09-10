$ErrorActionPreference = "Stop"

$integrationRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path
$sourcePath = Join-Path $integrationRoot "vendor\dungeondraft-mcp\mod\dungeondraft-mcp-bridge"
$licensePath = Join-Path $integrationRoot "vendor\dungeondraft-mcp\LICENSE"
$targetRoot = Join-Path $integrationRoot "mods"
$targetPath = Join-Path $targetRoot "dungeondraft-mcp-bridge"

If((Test-Path -LiteralPath $sourcePath) -eq $false)
{
    throw "The pinned dungeondraft-mcp submodule is not initialized: $sourcePath"
}

If((Test-Path -LiteralPath $licensePath) -eq $false)
{
    throw "The upstream MIT license was not found: $licensePath"
}

New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
Copy-Item -Path (Join-Path $sourcePath "*") -Destination $targetPath -Recurse -Force
Copy-Item -LiteralPath $licensePath -Destination (Join-Path $targetPath "LICENSE") -Force

Write-Output "Prepared MCP Bridge mod at: $targetPath"
Write-Output "In Dungeondraft, select this mods folder: $targetRoot"
