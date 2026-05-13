//priority: 9999
GTCEuStartupEvents.registry('gtceu:element', event => {
    const elem = global.pvHelpers.easyElement(event);

    elem("anulium", "ø", -1, -1, -1, null, false);
    elem("gurglium", "Þ", -1, -1, -1, null, false);
    elem("primordium", "¤", -1, -1, -1, null, false);
    elem("energium", "⚡", -1, -1, -1, null, false);
    elem("engeriophage", "ð", -1, -1, -1, null, false);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    //Materials of Elements
    const elemmat = global.pvHelpers.elementalMaterial(event);
    elemmat("anulium")
    elemmat("gurglium")
    elemmat("primordium")
    elemmat("energium")
    elemmat("engeriophage")


    //Materials with Components
    event.create("test")
        .ingot()
        .components("1x energium", "1x engeriophage", "1x anulium", "1x gurglium", "1x primordium")
        .color(0x111111)

//NOTE: 1-Terth


//NOTE: 1.5-Orbit


//NOTE: 2: Noom
    event.create("noom")
        .dust()
        .components("2x chromium", "1x iron", "1x aluminium", "1x uranium", "3x helium_3", "2x silicon", '1x anulium')
        .iconSet(global.pvHelpers.getIcon("SAND"))
        .color(0xc4c5cb).secondaryColor(0xb0b0b5)
        .flags(global.pvHelpers.resolveFlags(
            "block", "no_decomp"))
    event.create("light_noom")
        .dust()
        .components("3x helium_3", "2x silicon", '1x anulium')
        .iconSet(global.pvHelpers.getIcon("SAND"))
        .color(0xdcdcdf).secondaryColor(0xceced2)
        .flags(global.pvHelpers.resolveFlags(
            "block","no_decomp"))

    event.create("dark_noom")
        .dust()
        .components("2x chromium", "1x iron", "1x aluminium", "1x uranium")
        .iconSet(global.pvHelpers.getIcon("SAND"))
        .color(0x9b9b9f).secondaryColor(0x69696c)
        .flags(global.pvHelpers.resolveFlags(
            "block","no_decomp"))

    event.create("noom_goo")
        .gem()
        .components("1x anulium")
        .iconSet(global.pvHelpers.getIcon("LIGNITE"))
        .color(0xdcdcdf).secondaryColor(0xceced2)
        .flags(global.pvHelpers.resolveFlags(
            "block","no_decomp"))
        .ignoredTagPrefixes([TagPrefix.dust,TagPrefix.dustSmall, TagPrefix.dustTiny, TagPrefix.gemExquisite, TagPrefix.gemFlawless])

//NOTE: 3: Glugg
    event.create("glugg_brine")
        .liquid(new GTFluidBuilder().block().temperature(294))
        .color(0x1dbc5f).secondaryColor(0x5cffff)
        .components("1x gurglium")

    event.create("concentrated_glugg_brine")
        .liquid(new GTFluidBuilder().block().temperature(372))
        .color(0x5cff7d).secondaryColor(0x5cffc1)
        .components("2x gurglium")

    event.create("heavy_glugg_goo")
        .gem()
        .components("1x gurglium", "2x titanium")
        .iconSet(global.pvHelpers.getIcon("LIGNITE"))
        .color(0x5cff7d).secondaryColor(0x855cff)
        .flags(global.pvHelpers.resolveFlags(
            "block","no_decomp"))
        .ignoredTagPrefixes([TagPrefix.dust,TagPrefix.dustSmall, TagPrefix.dustTiny, TagPrefix.gemExquisite, TagPrefix.gemFlawless])

    event.create("glugg_goo")
        .gem()
        .components("1x gurglium")
        .iconSet(global.pvHelpers.getIcon("LIGNITE"))
        .color(0x5cff7d).secondaryColor(0x5cffff)
        .flags(global.pvHelpers.resolveFlags(
            "block","no_decomp"))
        .ignoredTagPrefixes([TagPrefix.dust,TagPrefix.dustSmall, TagPrefix.dustTiny, TagPrefix.gemExquisite, TagPrefix.gemFlawless])

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