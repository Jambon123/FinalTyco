ServerEvents.recipes(event => {
    event.recipes.gtceu.forge_hammer("hammer_moon_stone_to_sand")
        .itemInputs("1x genesis:moon_stone")
        .itemOutputs("2x genesis:moon_sand")
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.forge_hammer("hammer_moon_sand_to_dust")
        .itemInputs("1x genesis:moon_sand")
        .itemOutputsRanged("gtceu:noom_dust", 4,5)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.centrifuge("centrifuge_moon_dust_to_dusts")
        .itemInputs("3x gtceu:noom_dust")
        .itemOutputs("2x gtceu:dark_noom_dust", "1x gtceu:light_noom_dust")
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.LV])

})