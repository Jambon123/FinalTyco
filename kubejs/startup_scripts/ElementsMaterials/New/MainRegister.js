//priority: 5
GTCEuStartupEvents.registry('gtceu:element', event => {
    const elem = global.pvHelpers.easyElement(event);

    elem("energium", "⚡", -1, -1, -1, null, false);
    elem("engeriophage", "ð", -1, -1, -1, null, false);
    elem("anulium", "ø", -1, -1, -1, null, false);
    elem("gurglium", "Þ", -1, -1, -1, null, false);
    elem("primordium", "¤", -1, -1, -1, null, false)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    //Materials of Elements
    const elemmat = global.pvHelpers.elementalMaterial(event);
    elemmat("energium")
    elemmat("engeriophage")
    elemmat("anulium")
    elemmat("gurglium")
    elemmat("primordium")

    //Materials with Components
    event.create("test")
        .ingot()
        .components("1x energium", "1x engeriophage", "1x anulium", "1x gurglium", "1x primordium")
        .color(0x111111)

//NOTE: 1-Terth


//NOTE: 1.5-Orbit


//NOTE: 2: Noom


//NOTE: 3: Glugg


// NOTE: 4-Cindel


// NOTE: 5-Enger
    //Energium Primaries
    event.create("pure_energium")
        .gem()
        .liquid(new GTFluidBuilder().block().temperature(300))
        .gas(762).plasma(8621)
        .components('6x energium')
        .color(0xb24cd8).secondaryColor(0x7f3fb2)
        .iconSet(global.pvHelpers.getIcon("CERTUS"))
        .flags(global.pvHelpers.resolveFlags(
            "frame", "plates", "dense_plate", "long_rod", "crystallizable", "lens"))

    event.create("infected_energium")
        .ingot()
        .components("5x energium", "1x engeriophage")
        .color(0xb24cd8).secondaryColor(0x71d84c)
        .iconSet(global.pvHelpers.getIcon("CERTUS"))
        .flags(global.pvHelpers.resolveFlags(
            "round"))

    event.create("infected_depleted_energium")
        .ingot()
        .components("4x energium", "1x engeriophage")
        .color(0x4c1560).secondaryColor(0x71d84c)
        .iconSet(global.pvHelpers.getIcon("CERTUS"))
        .flags(global.pvHelpers.resolveFlags(
            "round"))

    event.create("depleted_energium")
        .ingot()
        .components("5x energium")
        .color(0x4c1560).secondaryColor(0x7f3fb2)
        .iconSet(global.pvHelpers.getIcon("CERTUS"))
        .flags(global.pvHelpers.resolveFlags(
            "round"))
})