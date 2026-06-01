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
    regmat("manasteel", "ingot", "SHINY", 0x4c82a9, 0x171781).components("1x iron", "3x mana")
    regmat("mana_diamond", "gem", "SHINY", 0xcdfef8, 0x80b9c4).components("1x diamond", "10x mana")
    regmat("mana_pearl", "gem", "SHINY", 0x80d9e1, 0x80b9c4).components("1x ender_pearl", "6x mana").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
    regmat("mana_quartz", "gem", "QUARTZ", 0xcde5ee, 0x9bc4d5).components("1x mana", "4x nether_quartz").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
    regmat("terrasteel", "ingot", "SHINY", 0x51ac49, 0x032d15).components("1x manasteel", "1x mana_pearl", "1x mana_diamond", "500x mana")
    regmat("elementium", "ingot", "SHINY", 0xae647d, 0x31054e).components("1x iron", "3x alfmana")
    regmat("dragonstone", "gem", "SHINY", 0xdda3d9, 0xad92ba).components("1x diamond", "10x alfmana")
    regmat("pixie_dust", "gem", "SHINY", 0xdda3d9, 0xad92ba).components("1x ender_pearl", "6x alfmana").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
    regmat("elementium_quartz", "gem", "QUARTZ", 0xda83d4, 0x9c85b7).components("1x alfmana", "4x nether_quartz").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
    regmat("alfquartz", "gem", "QUARTZ", 0xedfbed, 0xa7eea8).components("1x alfmana", "2x nether_quartz").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
    regmat("life_essence", "gem", "QUARTZ", 0xedfbed, 0xa7eea8).components("1x spirit").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
    regmat("gaia_spirit", "ingot", "SHINY", 0xedfbed, 0xa7eea8).components("4x life_essence", "1x terrasteel").ignoredTagPrefixes([TagPrefix.gemExquisite, TagPrefix.gemFlawless])
})

/*GTCEuStartupEvents.materialModification(event => { 
    TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("manasteel"))
})

StartupEvents.postInit(event => { 
    TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("manasteel"), "botania:manasteel_ingot")
})*/

/*
global.pvHelpers.ignoreForms("manasteel", {
    ingot: "botania:manasteel_ingot", 
    nugget: "botania:manasteel_nugget", 
    block: "botania:manasteel_block"
})*/

/*
    TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("manasteel"), "botania:manasteel_ingot")
    TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("manasteel"), "botania:manasteel_nugget")
    TagPrefix.block.setIgnoredBlock(GTMaterialRegistry.getMaterial("manasteel"), "botania:manasteel_block")

    TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("mana_diamond"), "botania:mana_diamond")       
    TagPrefix.block.setIgnoredBlock(GTMaterialRegistry.getMaterial("mana_diamond"), "botania:mana_diamond_block")     
    TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("mana_pearl"), "botania:mana_pearl")
    TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("mana_quartz"), "botania:quartz_mana")
    TagPrefix.block.setIgnoredBlock(GTMaterialRegistry.getMaterial("mana_quartz"), "botania:mana_quartz")

    TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("terrasteel"), "botania:terrasteel_ingot")
    TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("terrasteel"), "botania:terrasteel_nugget")
    TagPrefix.block.setIgnoredBlock(GTMaterialRegistry.getMaterial("terrasteel"), "botania:terrasteel_block")

global.pvHelpers.ignoreForms("life_essence", {
    gem: "botania:life_essence"})*/