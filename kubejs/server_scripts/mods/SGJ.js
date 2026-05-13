//priority: 100

ServerEvents.recipes(event => {
    global.pvHelpers.massRemoveRecipesBy(event, "output", [
        "sgjourney:copper_iris","sgjourney:iron_iris","sgjourney:golden_iris",
        "sgjourney:diamond_iris","sgjourney:netherite_iris","sgjourney:naquadah_alloy_iris",
        "sgjourney:bronze_iris","sgjourney:steel_iris"
    ])
})