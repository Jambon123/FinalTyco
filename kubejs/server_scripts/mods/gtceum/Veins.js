//priority: 5
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('Noom')
    .targets('#minecraft:stone_ore_replaceables', 'genesis:moon_stone') // [*] 
        .dimensions('genesis:moon') // [*]
})  

GTCEuServerEvents.oreVeins(event => {
//NOTE: 1-Terth
// 
        public static final GTOreDefinition MAGNETITE_VEIN = create("magnetite_vein", vein -> vein
            .clusterSize(UniformInt.of(38, 44)).density(0.15f).weight(30)
            .layer(WorldGenLayers.Moon_Stone)
            vein.layer("Noom")
            .heightRangeUniform(20, 80)
            .biomes(BiomeTags.IS_MOON)
            .layeredVeinGenerator(generator -> generator
                    .withLayerPattern(() -> GTLayerPattern.builder(OVERWORLD_RULES)
                            .layer(l -> l.weight(3).mat(Magnetite).size(1, 4))
                            .layer(l -> l.weight(2).mat(VanadiumMagnetite).size(1, 2))
                            .layer(l -> l.weight(2).mat(Chromite).size(1, 1))
                            .layer(l -> l.weight(1).mat(Gold).size(1, 1))
                            .build()))
            .surfaceIndicatorGenerator(indicator -> indicator
                    .surfaceRock(Magnetite)
                    .placement(SurfaceIndicatorGenerator.IndicatorPlacement.ABOVE)));

//NOTE: 1.5-Orbit


//NOTE: 2: Noom


//NOTE: 3: Glugg


// NOTE: 4-Cindel


// NOTE: 5-Enger

})