// priority: 67

// All planets (Avena, Noom, Glugg, Cindel, Enger)
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:gold_vein_all", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(30) // [*] 
        vein.density(0.15) // [*] 

        vein.layer("all_planets") // [*] 
        vein.biomes("#pvworld:is_planet") //  

        vein.heightRangeUniform(10, 60) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Gold)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:mica_vein_all", vein => {
        vein.weight(20) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("all_planets") // [*] 
        vein.biomes("#pvworld:is_planet") // 

        vein.heightRangeUniform(-40, -10) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Mica)
			.radius(3)
		)
    })
})
 

// Offworld (Noom, Glugg, Cindel, Enger)
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:apatite_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(10, 80) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Apatite).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.TricalciumPhosphate).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Apatite)
			.placement("above")
		)
    })
})
 
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:cassiterite_vein_offworld", vein => {
        vein.weight(80) // [*] 
        vein.clusterSize(46) // [*] 
        vein.density(1.0) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(10, 80) // 

        vein.veinedVeinGenerator(generator => generator
			.oreBlock(GTMaterials.Tin, 4) // 
			.rareBlock(GTMaterials.Cassiterite, 2) // 
			.rareBlockChance(0.33)
			.veininessThreshold(0.01)
			.maxRichnessThreshold(0.175)
			.minRichness(0.7)
			.maxRichness(1.0)
			.edgeRoundoffBegin(3) // 
			.maxEdgeRoundoff(0.1) // 
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Chalcopyrite)
		)
    })
})
 
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:copper_tin_vein_offworld", vein => {
        vein.weight(50) // [*] 
        vein.clusterSize(46) // [*] 
        vein.density(1.0) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(-10, 160) // 

        vein.veinedVeinGenerator(generator => generator
			.oreBlock(GTMaterials.Chalcopyrite, 5) // 
			.oreBlock(GTMaterials.Zeolite, 2) // 
			.oreBlock(GTMaterials.Cassiterite, 2) // 
			.rareBlock(GTMaterials.Realgar, 1) // 
			.rareBlockChance(0.1)
			.veininessThreshold(0.01)
			.maxRichnessThreshold(0.175)
			.minRichness(0.7)
			.maxRichness(1.0)
			.edgeRoundoffBegin(3) // 
			.maxEdgeRoundoff(0.1) // 
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Chalcopyrite)
		)
    })
})
 
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:galena_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(-15, 45) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Galena)
		)
    })
})
 
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:garnet_tin_vein_offworld", vein => {
        vein.weight(80) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.4) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(30, 60) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.CassiteriteSand).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.GarnetSand).size(1, 1))
				.layer(l => l.weight(2).mat(GTMaterials.Asbestos).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Diatomite).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.GarnetSand)
		)
    })
})
 
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:garnet_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(57) // [*] 
        vein.density(0.75) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(-10, 50) // 

        vein.dikeVeinGenerator(generator => generator
			.withBlock(GTMaterials.GarnetRed, 3, -10, 50) // 
			.withBlock(GTMaterials.GarnetYellow, 2, -10, 50)
			.withBlock(GTMaterials.Amethyst, 2, -10, 22)
			.withBlock(GTMaterials.Opal, 1, 18, 50)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.GarnetRed)
			.placement("above")
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:iron_vein_offworld", vein => {
        vein.weight(120) // [*] 
        vein.clusterSize(46) // [*] 
        vein.density(1.0) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(-10, 60) // 

        vein.veinedVeinGenerator(generator => generator
			.oreBlock(GTMaterials.Goethite, 5) // 
			.oreBlock(GTMaterials.Limonite, 2) // 
			.oreBlock(GTMaterials.Hematite, 2) // 
			.oreBlock(GTMaterials.Malachite, 1) // 
			.veininessThreshold(0.01)
			.maxRichnessThreshold(0.175)
			.minRichness(0.7)
			.maxRichness(1.0)
			.edgeRoundoffBegin(3) // 
			.maxEdgeRoundoff(0.1) // 
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Talc)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:lubricant_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(27) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(0, 50) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Soapstone).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Talc).size(1, 1))
				.layer(l => l.weight(2).mat(GTMaterials.GlauconiteSand).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Talc)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:mineral_sand_vein_offworld", vein => {
        vein.weight(80) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.2) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(15, 60) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.BasalticMineralSand).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.GraniticMineralSand).size(1, 1))
				.layer(l => l.weight(2).mat(GTMaterials.FullersEarth).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Gypsum).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.BasalticMineralSand)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:nickel_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(-10, 60) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
				.layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Nickel)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:salts_vein_offworld", vein => {
        vein.weight(50) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.2) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(30, 70) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Salt)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:oilsands_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(27) // [*] 
        vein.density(0.3) // [*] 

        vein.layer("coal_planets") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(30, 80) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Oilsands).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Oilsands).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Oilsands).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Oilsands).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Oilsands)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:copper_vein_offworld", vein => {
        vein.weight(80) // [*] 
        vein.clusterSize(46) // [*] 
        vein.density(1.0) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(-40, 10) // 

        vein.veinedVeinGenerator(generator => generator
			.oreBlock(GTMaterials.Chalcopyrite, 5) // 
			.oreBlock(GTMaterials.Iron, 2) // 
			.oreBlock(GTMaterials.Pyrite, 2) // 
			.oreBlock(GTMaterials.Copper, 2) // 
			.veininessThreshold(0.01)
			.maxRichnessThreshold(0.175)
			.minRichness(0.7)
			.maxRichness(1.0)
			.edgeRoundoffBegin(3) // 
			.maxEdgeRoundoff(0.1) // 
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Copper)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:diamond_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(-55, -30) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Diamond).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Diamond)
			.placement("above")
			.density(0.1)
			.radius(2)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:lapis_vein_offworld", vein => {
        vein.weight(40) // [*] 
        vein.clusterSize(46) // [*] 
        vein.density(0.75) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(-60, 10) // 

        vein.dikeVeinGenerator(generator => generator
			.withBlock(GTMaterials.Lazurite, 3, -60, 10) // 
			.withBlock(GTMaterials.Sodalite, 2, -50, 0)
			.withBlock(GTMaterials.Lapis, 2, -50, 0)
			.withBlock(GTMaterials.Calcite, 1, -40, 10)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Lapis)
			.placement("above")
			.density(0.15)
			.radius(3)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:manganese_vein_offworld", vein => {
        vein.weight(20) // [*] 
        vein.clusterSize(57) // [*] 
        vein.density(0.75) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(-30, 0) // 

        vein.dikeVeinGenerator(generator => generator
			.withBlock(GTMaterials.Grossular, 3, -50, -5)
			.withBlock(GTMaterials.Spessartine, 2, -40, -15)
			.withBlock(GTMaterials.Pyrolusite, 2, -40, -15)
			.withBlock(GTMaterials.Tantalite, 1, -30, -5)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Grossular)
			.density(0.15)
			.radius(3)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:olivine_vein_offworld", vein => {
        vein.weight(20) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(-20, 10) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Bentonite).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Magnesite).size(1, 1))
				.layer(l => l.weight(2).mat(GTMaterials.Olivine).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Olivine)
			.placement("above")
			.density(0.115)
			.radius(3)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:redstone_vein_offworld", vein => {
        vein.weight(60) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.2) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(-65, -10) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Ruby).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Redstone)
		)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:sapphire_vein_offworld", vein => {
        vein.weight(60) // [*] 
        vein.clusterSize(27) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("offworld") // [*] 
        vein.biomes("#pvworld:is_offworld") // 

        vein.heightRangeUniform(-40, 0) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Almandine).size(2, 4))
				.layer(l => l.weight(2).mat(GTMaterials.Pyrope).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.Sapphire).size(1, 1))
				.layer(l => l.weight(1).mat(GTMaterials.GreenSapphire).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Olivine)
			.placement("above")
			.density(0.115)
			.radius(3)
		)
    })
})


// Avena
GTCEuServerEvents.oreVeins(event => {
     event.remove("gtceu:magnetite_vein_ow") 
})

GTCEuServerEvents.oreVeins(event => {
     event.remove("gtceu:mica_vein") 
})

GTCEuServerEvents.oreVeins(event => {
     event.remove("gtceu:redstone_vein_ow") 
})

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:redstone_vein_avena", vein => {
        vein.weight(60) // [*] 
        vein.clusterSize(36) // [*] 
        vein.density(0.2) // [*] 

        vein.layer("deepslate") // [*] 
        vein.biomes("#minecraft:is_overworld") // 

        vein.heightRangeUniform(-65, -10) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(3).mat(GTMaterials.Redstone).size(2, 4))
				.layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(1, 1))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Redstone)
		)
    })
})


// Noom
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.layer("noom")
		vein.dimensions("genesis:moon")
		vein.biomes("#genesis:is_moon")
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.layer("noom")
		vein.dimensions("genesis:moon")
		vein.biomes("#genesis:is_moon")
    })
})

// Coal Planets (Glugg and Cindel)
GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:coal_vein_offworld", vein => {
        vein.weight(80) // [*] 
        vein.clusterSize(41) // [*] 
        vein.density(0.25) // [*] 

        vein.layer("coal_planets") // [*] 
        vein.biomes("#pvworld:is_offworld") //  

        vein.heightRangeUniform(10, 140) // 

        vein.layeredVeinGenerator(generator => generator
			.buildLayerPattern(pattern => pattern
				.layer(l => l.weight(1).mat(GTMaterials.Coal).size(2, 4))
			)
		)

        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Coal)
		)
    })
})


// Glugg
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.layer("glugg")
		vein.dimensions("pvworld:glugg")
		vein.biomes("#pvworld:is_glugg")
		vein.heightRangeUniform(100, 172)
    })
})

// Cindel
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:scheelite_vein", vein => {
        vein.layer("cindel")
		vein.dimensions("pvworld:cindel")
		vein.biomes("#pvworld:is_cindel")
    })
})

// Enger
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:naquadah_vein", vein => {
        vein.layer("enger")
		vein.dimensions("pvworld:enger")
		vein.biomes("#pvworld:is_enger")
		vein.heightRangeUniform(-30, 30)
    })
})

GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.layer("enger")
		vein.dimensions("pvworld:enger")
		vein.biomes("#pvworld:is_enger")
		vein.heightRangeUniform(-50, 10)
    })
})