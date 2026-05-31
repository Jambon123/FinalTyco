ServerEvents.recipes(event => {
    const gtRecipe = global.pvHelpers.easyGTRecipe(event)
    gtRecipe("canner", "bottle_ender_air", 15, "lva", null , 
        "1x minecraft:glass_bottle", "gtceu:ender_air 5000", "1x botania:ender_air_bottle", null)
})