//priority: 5
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('Noom')
    .targets('#minecraft:stone_ore_replaceables', 'genesis:moon_stone') // [*] 
        .dimensions('genesis:moon') // [*]
})  

//NOTE: 1-Terth
// 

//NOTE: 1.5-Orbit


//NOTE: 2: Noom
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:magnetitemoon_vein", vein => {
        // Basic vein generation properties
        vein.weight(200) // [*] 
        vein.clusterSize(40) // [*] 
        vein.density(0.25) // [*] 
        vein.discardChanceOnAirExposure(0) // 

        // Define where the vein can generate
        vein.layer("Noom") // [*] 
        vein.dimensions("genesis:moon") // 

        // Define a height range:
        // You must choose EXACTLY ONE of these options! [*]
        vein.heightRangeUniform(-60, 20) // 
        vein.heightRangeTriangle(-60, 20) // 
        vein.heightRange(/* ... */) // 

        // Define the vein's generator:
    vein.layeredVeinGenerator(generator => generator
    .buildLayerPattern(pattern => pattern
        .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(2, 4))
        .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
        .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:oak_log')).size(1, 1))
        .layer(l => l.weight(1).state(() => Block.getBlock('minecraft:oak_planks').defaultBlockState()).size(1, 1))
    )
)
        // Add one or more type of surface indicator to the vein:
        vein.addIndicator(magnetite) // 
    })

//NOTE: 3: Glugg


// NOTE: 4-Cindel


// NOTE: 5-Enger

})