ServerEvents.recipes(event => {
    const gtRecipe = global.pvHelpers.easyGTRecipe(event)
    gtRecipe("canner", "bottle_ender_air", 15, "lva", null , 
        "1x minecraft:glass_bottle", "gtceu:ender_air 5000", "1x botania:ender_air_bottle", null)

    gtRecipe("extractor", "extract_ender_air", 15, "iva", null , 
        "1x minecraft:end_stone", null, null, "gtceu:ender_air 10000")

    gtRecipe("chemical_reactor", "react_to_endstone", 15, "iva", null , 
        "1x minecraft:stone", "tconstruct:molten_ender 100", "1x minecraft:end_stone", null)

    gtRecipe("extractor", "extract_molten_ender_from_pearl", 10, "eva", null, 
        "1x minecraft:ender_pearl", null, null, "tconstruct:molten_ender 250"
    )
    gtRecipe("extractor", "extract_molten_ender_from_pearl_dust", 10, "eva", null, 
        "1x gtceu:ender_pearl_dust", null, null, "tconstruct:molten_ender 250"
    )
    gtRecipe("chemical_reactor", "react_apple_to_chorus_flower", 15, "iva", null , 
        "1x minecraft:apple", "gtceu:ender_air 5000", "1x minecraft:chorus_flower", null
    )
    gtRecipe("chemical_reactor", "react_slime_to_enderslime", 5, "hva", null , 
        "1x minecraft:slime_ball", "gtceu:ender_air 5000", "1x tconstruct:ender_slime_ball", null
    )
    gtRecipe("laser_engraver", "engrave_enderslime_crystal_to_shulking_crystal", 30, "hva", null , 
        "1x tconstruct:ender_slime_crystal", null, Item.of('tconstruct:modifier_crystal', '{modifier:"tconstruct:shulking"}'), null
    ).notConsumable("#forge:lenses/purple")
    gtRecipe("laser_engraver", "engrave_enderslime_crystal_block_to_shulker_shell", 30, "hva", null , 
        "tconstruct:ender_slime_crystal_block", null, "minecraft:shulker_shell", null
    ).notConsumable("#forge:lenses/red")
    gtRecipe("chemical_reactor", "react_dragon_breath_from_end_mats", 15, "iva", null , 
        ["1x botania:ender_air_bottle","botania:dragonstone"], null, "1x minecraft:dragon_breath", null)
})