GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('volcanicGenerator')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 2, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE , FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

})

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('volcanicGenerator', 'multiblock')
        .recipeType('volcanicGenerator')
        .generator(true)
        .regressWhenWaiting(false)
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH)
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
		.aisle("ddddaaa", "deedaaa", "fggfaaa", "fggfaaa", "ffffaaa")
		.aisle("ddddaaa", "eiieaaa", "gjjgaaa", "gjjgaaa", "ffffaaa")
		.aisle("ddddbbb", "eiiebcb", "gjjgbcb", "gjjgbbb", "ffffaaa")
		.aisle("dd@dbbb", "deedccc", "fggfccc", "fggfbhb", "ffffaaa")
		.aisle("aaaabbb", "aaaabcb", "aaaabcb", "aaaabbb", "aaaaaaa")
		.where("@", Predicates.controller(Predicates.blocks(definition.get())))
		.where("a", Predicates.blocks("minecraft:air"))
		.where("b", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
		.where("c", Predicates.blocks("gtceu:heat_vent"))
		.where("d", Predicates.blocks("gtceu:robust_machine_casing")
			.or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
            .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(2).setPreviewCount(1))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
            .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setMaxGlobalLimited(2).setPreviewCount(1))
            .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
				)
		.where("e", Predicates.blocks("gtceu:tungstensteel_firebox_casing"))
		.where("f", Predicates.blocks("gtceu:tungstensteel_turbine_casing"))
		.where("g", Predicates.blocks("gtceu:laminated_glass"))
		.where("h", Predicates.abilities(PartAbility.MUFFLER))
		.where("i", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
		.where("j", Predicates.blocks("gtceu:tungstensteel_gearbox"))
		.where(' ', Predicates.air())
            .build())
        .workableCasingModel('gtceu:block/casings/gcym/hv_machine_casing',
        'gtceu:block/multiblock/implosion_compressor')
        
})

