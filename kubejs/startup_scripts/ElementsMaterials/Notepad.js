// priority: 90

/*
global.elementFunction = (event) => {
    return (name, p, n, sym, iso, hls, decay) => {
        event.create(name)
            .protons(p)
            .neutrons(n)
            .symbol(sym)
            .isIsotope(iso)
            .halfLifeSeconds(hls)
            .decayTo(decay);
    };
}

GTCEuStartupEvents.registry('gtceu:element', event => {
    
    const elem = global.elementFunction(event);

    elem("energium", 0, 0, "⚡︎", false, -1, null)
});

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("energium")
        .element(GTElements.get("energium"))
        .gem()
        .color(0xb24cd8).secondaryColor(0x7f3fb2)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.GENERATE_LENS)
})


Server!:
    event.recipes.gtceu.fluid_heater("heat_gb_to_cgb")
        .inputFluids(Fluid.of("gtceu:glugg_brine", 200))
        .outputFluids(Fluid.of("gtceu:concentrated_glugg_brine", 100))
        .duration(2 * 20)
        .EUt(global.pvHelpers.constVoltages('mva'))

*/