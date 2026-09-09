const MODULE_ID = "ashen-gauntlet";
const SHOW_STARTUP_NOTIFICATION_SETTING = "showStartupNotification";

/**
 * <summary>Registers smoke-test settings. Input: Foundry's init hook.</summary>
 */
function onInit()
{
    console.info("The Ashen Gauntlet | Initializing");

    game.settings.register(MODULE_ID, SHOW_STARTUP_NOTIFICATION_SETTING, {
        name: "Show Ashen Gauntlet Startup Notification",
        hint: "Shows a development smoke-test notification to GMs when The Ashen Gauntlet loads. Disable this setting to hide the notification.",
        scope: "world",
        config: true,
        type: Boolean,
        default: true
    });
}

/**
 * <summary>Reports smoke-test readiness. Input: Foundry's ready hook.</summary>
 */
function onReady()
{
    console.info("The Ashen Gauntlet | Ready");

    if (game.user.isGM == false)
    {
        return;
    }

    const showStartupNotification = game.settings.get(MODULE_ID, SHOW_STARTUP_NOTIFICATION_SETTING);
    if (showStartupNotification == false)
    {
        return;
    }

    ui.notifications.info("The Ashen Gauntlet loaded successfully.");
}

Hooks.once("init", onInit);
Hooks.once("ready", onReady);
