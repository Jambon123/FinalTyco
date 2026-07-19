// priority: 68

// Noom
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('moon_stone', 'ore') // 
        .stateSupplier(() => Block.getBlock('genesis:moon_stone').defaultBlockState()) // 
        .baseModelLocation('genesis:block/moon_stone') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})

// Cindel
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('limestone', 'ore') // 
        .stateSupplier(() => Block.getBlock('alexscaves:limestone').defaultBlockState()) // 
        .baseModelLocation('alexscaves:block/limestone') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('galena', 'ore') // 
        .stateSupplier(() => Block.getBlock('alexscaves:galena').defaultBlockState()) // 
        .baseModelLocation('alexscaves:block/galena') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})

// Enger
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('engerslate', 'ore') // 
        .stateSupplier(() => Block.getBlock('pvcore:engerslate').defaultBlockState()) // 
        .baseModelLocation('pvcore:block/engerslate') // 
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})