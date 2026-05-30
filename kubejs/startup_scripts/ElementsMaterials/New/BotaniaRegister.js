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

    event.create("mana_diamond")
        .ingot()
        .components("1x diamond", "10x mana")
        .color(0x1f20b7).secondaryColor(0xb3dbf5)
        .iconSet(global.pvHelpers.getIcon("SHINY"))

    event.create("mana_pearl")
        .gem()
        .components("1x ender_pearl", "6x mana")
        .color(0x1f20b7).secondaryColor(0xb3dbf5)
        .iconSet(global.pvHelpers.getIcon("SHINY"))

    event.create("terraasteel")
        .ingot()
        .components("1x manasteel", "1x mana pearl", "1x mana diamond", "500x mana")
        .color(0x5cc154).secondaryColor(0x021c0d)
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