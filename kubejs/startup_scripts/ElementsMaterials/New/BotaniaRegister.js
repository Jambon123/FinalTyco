//priority: 9998
//const $BotaniaItems = Java.loadClass("vazkii.botania.common.item.BotaniaItems")

GTCEuStartupEvents.registry('gtceu:element', event => {
    const elem = global.pvHelpers.easyElement(event);

    elem("mana", "Ma", 1, 1, -1, null, false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    //Materials of Elements
    const elemmat = global.pvHelpers.elementalMaterial(event);
    elemmat("mana",0xb3dbf5)

    console.log(Item.of("botania:manasteel_ingot").item)

    //Materials with Components
    event.create("manasteel")
        .ingot()
        .components("1x iron", "3x mana")
        .color(0x1f20b7).secondaryColor(0xb3dbf5)
        .iconSet(global.pvHelpers.getIcon("SHINY"))
})

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("manasteel"))
    TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("manasteel"))
    TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial("manasteel"))
})

StartupEvents.postInit(event => {
    TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial("manasteel"), "botania:manasteel_ingot")
    TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial("manasteel"), "botania:manasteel_nugget")
    TagPrefix.block.setIgnoredBlock(GTMaterialRegistry.getMaterial("manasteel"), "botania:manasteel_block")
})