ServerEvents.recipes(event => {
    const swapgtRecipe = global.pvHelpers.swapAndeasyGTRecipe(event)

    

    swapgtRecipe(false,"electric_blast_furnace","blast_magnesium_diboride","alloy_smelter",50, "hva", null, 
        "1x gtceu:magnesium_diboride_dust",null,"1x gtceu:magnesium_diboride_ingot",null)

    swapgtRecipe(false, "electric_blast_furnace", "blast_manganese_phosphide", "alloy_smelter", 50.4, "mva", null, 
        ["1x gtceu:manganese_dust", "1x gtceu:phosphorus_dust"], null, "1x gtceu:manganese_phosphide_ingot",null)
})
