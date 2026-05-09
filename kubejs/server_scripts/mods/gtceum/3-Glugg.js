ServerEvents.recipes(event => {

    event.recipes.gtceu.fluid_heater("heat_gb_to_cgb")
        .inputFluids(Fluid.of("gtceu:glugg_brine", 200))
        .outputFluids(Fluid.of("gtceu:concentrated_glugg_brine", 100))
        .duration(2 * 20)
        .EUt(global.pvHelpers.constVoltages('mva'))

    event.recipes.gtceu.distillation_tower("distill_cgb_to_glugg_goo_etc")
        .inputFluids("gtceu:concentrated_glugg_brine 200")
        .outputFluids("gtceu:steam 500","gtceu:salt_water 200","gtceu:oil 50")
        .itemOutputs("1x gtceu:heavy_glugg_goo_gem")
        .duration(20 * 20)
        .EUt(global.pvHelpers.constVoltages('lva'))

    event.recipes.gtceu.centrifuge("centrifuge_heavy_glugg_goo_to_glugg_goo")
        .itemInputs("2x gtceu:heavy_glugg_goo_gem")
        .itemOutputs("1x gtceu:glugg_goo_gem", "3x gtceu:titanium_dust")
        .duration(10 * 20)
        .EUt(global.pvHelpers.constVoltages('mva'))
})