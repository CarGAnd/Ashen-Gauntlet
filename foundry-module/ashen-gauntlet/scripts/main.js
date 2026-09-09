/**
 * <summary>Confirms module initialization. Input: Foundry's init hook.</summary>
 */
function onInit()
{
    console.info("The Ashen Gauntlet | Initialized");
}

/**
 * <summary>Confirms the module is ready. Input: Foundry's ready hook.</summary>
 */
function onReady()
{
    console.info("The Ashen Gauntlet | Ready");
}

Hooks.once("init", onInit);
Hooks.once("ready", onReady);

