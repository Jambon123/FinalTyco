//priority: 103
ServerEvents.recipes(event => {
    const gtRecipe = global.pvHelpers.easyGTRecipe(event)

    event.remove({id: "gtceu:macerator/macerate_noom_block"})
    
    gtRecipe("forge_hammer","hammer_moon_stone_to_sand", 10, "lva", null,
        "1x genesis:moon_stone", null, //Inputs
        "2x genesis:moon_sand", null //Outputs
    )

    gtRecipe("forge_hammer", "hammer_moon_sand_to_dust", 10, "lva", null,
        "1x genesis:moon_sand", null, //Inputs
        null, null //Outputs
    ).itemOutputsRanged("gtceu:noom_dust", 4,5)

    gtRecipe("centrifuge", "centrifuge_moon_dust_to_dusts", 10, "lva", null,
        "3x gtceu:noom_dust", null, //Inputs
        ["2x gtceu:dark_noom_dust", "1x gtceu:light_noom_dust"], null //Outputs
    )

    gtRecipe("electrolyzer", "decomposition_dark_moon_dust_to_gtregs", 10, "lva", 0,
        "9x gtceu:dark_noom_dust", null, //Inputs
        ["4x gtceu:stone_dust", "2x gtceu:chromium_dust", "1x gtceu:iron_dust", "1x gtceu:aluminium_dust", "1x gtceu:uranium_dust"], null //Outputs
    )

    gtRecipe("electrolyzer", "decomposition_dark_moon_dust_to_gt_and_crowns", 10, "lva", 1,
        "9x gtceu:dark_noom_dust", null, //Inputs
        ["4x gtceu:stone_dust", "2x gtceu:chromium_dust", "1x gtceu:iron_dust", "1x gtceu:aluminium_dust", "1x crowns:natural_uranium_nugget"], null //Outputs
    )

    gtRecipe("electrolyzer", "decomposition_light_moon_dust", 10, "lva", null,
        "5x gtceu:light_noom_dust", null, //Inputs
        ["2x gtceu:stone_dust", "2x gtceu:silicon_dust", "1x gtceu:noom_goo_gem"], "gtceu:liquid_helium 300" //Outputs
    )

})