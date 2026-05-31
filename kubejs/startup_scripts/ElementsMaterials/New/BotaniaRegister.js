//priority: 9998
//const $BotaniaItems = Java.loadClass("vazkii.botania.common.item.BotaniaItems")

GTCEuStartupEvents.registry('gtceu:element', event => {
    const elem = global.pvHelpers.easyElement(event);

    elem("mana", "Ma", 1, 1, -1, null, false);
    elem("alfmana", "Af", 1, 1, -1, null, false);
    elem("spirit", "Sp", 1, 1, -1, null, false)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    //Materials of Elements
    const elemmat = global.pvHelpers.elementalMaterial(event);
    elemmat("mana", 0xb3dbf5)
    elemmat("alfmana", 0x02f400)
    elemmat("spirit",  0xffe8e8)

    //Materials with Components
    const regmat = global.pvHelpers.setupMaterial(event)
    event.create("manasteel")
        .ingot()
        .components("1x iron", "3x mana")
        .color(0x4c82a9).secondaryColor(0x171781)
        .iconSet(global.pvHelpers.getIcon("SHINY"))

    event.create("mana_diamond")
        .gem()
        .components("1x diamond", "10x mana")
        .color(0xcdfef8).secondaryColor(0x80b9c4)
        .iconSet(global.pvHelpers.getIcon("SHINY"))
        

    event.create("mana_pearl")
        .gem()
        .components("1x ender_pearl", "6x mana")
        .color(0x80d9e1).secondaryColor(0x80b9c4)
        .iconSet(global.pvHelpers.getIcon("SHINY"))
        .ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])

    event.create("mana_quartz")
        .gem()
        .components("1x mana", "4x nether_quartz")
        .color(0xcde5ee).secondaryColor(0x9bc4d5)
        .iconSet(global.pvHelpers.getIcon("QUARTZ"))
        .ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])

    event.create("terrasteel")
        .ingot()
        .components("1x manasteel", "1x mana_pearl", "1x mana_diamond", "500x mana")
        .color(0x51ac49).secondaryColor(0x032d15)
        .iconSet(global.pvHelpers.getIcon("SHINY"))

    event.create("elementium")
        .ingot()
        .components("1x iron", "3x alfmana")
        .color(0xae647d).secondaryColor(0x31054e)
        .iconSet(global.pvHelpers.getIcon("SHINY"))

    event.create("dragonstone")
        .gem()
        .components("1x diamond", "10x alfmana")
        .color(0xdda3d9).secondaryColor(0xad92ba)
        .iconSet(global.pvHelpers.getIcon("SHINY"))

    event.create("pixie_dust")
        .gem()
        .components("1x ender_pearl", "6x alfmana")
        .color(0xdda3d9).secondaryColor(0xad92ba)
        .iconSet(global.pvHelpers.getIcon("SHINY"))
        .ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])

    event.create("elementium_quartz")
        .gem()
        .components("1x alfmana", "4x nether_quartz")
        .color(0xda83d4).secondaryColor(0x9c85b7)
        .iconSet(global.pvHelpers.getIcon("QUARTZ"))
        .ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])

    event.create("alfquartz")
        .gem()
        .components("1x alfmana", "2x nether_quartz")
        .color(0xedfbed).secondaryColor(0xa7eea8)
        .iconSet(global.pvHelpers.getIcon("QUARTZ"))
        .ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])

    event.create("life_essence")
        .gem()
        .components("1x spirit")
        .color(0xedfbed).secondaryColor(0xa7eea8)
        .iconSet(global.pvHelpers.getIcon("QUARTZ"))
        .ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
/*
    event.create("gaia_spirit")
        .gem()
        .components("4x life_essence", "1x terrasteel")
        .color(0xedfbed).secondaryColor(0xa7eea8)
        .iconSet(global.pvHelpers.getIcon("QUARTZ"))
        .ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])*/

    regmat("gaia_spirit", "gem", "QUARTZ", 0xedfbed, 0xa7eea8).components("4x life_essence", "1x terrasteel").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
})

global.pvHelpers.ignoreForms("gaia_spirit", {
    gem: "botania:life_essence"})