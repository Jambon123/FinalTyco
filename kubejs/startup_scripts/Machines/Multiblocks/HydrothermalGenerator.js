GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('hydrotermal')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('hydrotermal', 'multiblock')
        .recipeType('hydrotermal')
        .generator(true)
        .regressWhenWaiting(false)
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("aba", "ccc", "ded", "ded", "fgf", "fff")
			.aisle("bbb", "chc", "ede", "ede", "gdg", "fif")
			.aisle("aba", "c@c", "ded", "ded", "fgf", "fff")
			.where("@", Predicates.controller(Predicates.blocks(definition.get())))
			.where("a", Predicates.blocks("gtceu:titanium_gearbox"))
			.where("b", Predicates.blocks("gtceu:titanium_firebox_casing"))
			.where("d", Predicates.blocks("minecraft:air"))
			.where("e", Predicates.blocks("gtceu:laminated_glass"))
			.where("f", Predicates.blocks("gtceu:titanium_turbine_casing"))
			.where("g", Predicates.blocks("gtceu:heat_vent"))
			.where("h", Predicates.blocks("kubejs:hydrothermalvent"))
			.where("i", Predicates.abilities(PartAbility.MUFFLER))
            .where("c", Predicates.blocks("gtceu:stable_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
				)
            .where(' ', Predicates.air())
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/hv_machine_casing',
        'gtceu:block/multiblock/implosion_compressor')
        
})


















