StartupEvents.registry('block', event => {

    const facingBlock = (id, block) => {
        block.placementState(ev => {
            ev.set(BlockProperties.HORIZONTAL_FACING, `${ev.getHorizontalDirection().getOpposite()}`)
        })
        block.blockstateJson = {
            variants: {
                "facing=north": { model: `kubejs:block/${id}` },
                "facing=east":  { model: `kubejs:block/${id}`, y: 90 },
                "facing=south": { model: `kubejs:block/${id}`, y: 180 },
                "facing=west":  { model: `kubejs:block/${id}`, y: 270 }
            }
        }
    }

    facingBlock('hydrothermalvent',
        event.create('hydrothermalvent')
            .fullBlock(false)
            .displayName('Hydrothermal Vent')
            .model('kubejs:block/hydrothermalvent')
            .soundType('crop')
            .renderType('translucent')
            .defaultTranslucent()
            .hardness(2).resistance(2)
            .notSolid().jumpFactor(2).noDrops()
            .tagBlock('minecraft:mineable/sword')
            .requiresTool(true)
            .property(BlockProperties.WATERLOGGED)
            .property(BlockProperties.HORIZONTAL_FACING)
    )

    facingBlock('hulldeioniser',
        event.create('hulldeioniser')
            .fullBlock(false)
            .displayName('Hull Deioniser')
            .model('kubejs:block/hulldeioniser')
            .soundType('metal')
            .renderType('translucent')
            .hardness(2).resistance(2)
            .notSolid()
            .tagBlock('minecraft:mineable/pickaxe')
            .requiresTool(true)
            .property(BlockProperties.HORIZONTAL_FACING)
    )

    facingBlock('sacrificialanode',
        event.create('sacrificialanode')
            .fullBlock(false)
            .displayName('Sacrificial Anode')
            .model('kubejs:block/sacrificialanode')
            .soundType('metal')
            .renderType('translucent')
            .hardness(2).resistance(2)
            .notSolid()
            .tagBlock('minecraft:mineable/pickaxe')
            .requiresTool(true)
            .property(BlockProperties.HORIZONTAL_FACING)
    )

    facingBlock('heatsink',
        event.create('heatsink')
            .fullBlock(false)
            .displayName('Heat Sink')
            .model('kubejs:block/heatsink')
            .soundType('metal')
            .renderType('translucent')
            .hardness(2).resistance(2)
            .notSolid()
            .tagBlock('minecraft:mineable/pickaxe')
            .requiresTool(true)
            .property(BlockProperties.HORIZONTAL_FACING)
    )

    facingBlock('riftcrown',
        event.create('riftcrown')
            .fullBlock(false)
            .displayName('Rift Crown')
            .model('kubejs:block/riftcrown')
            .soundType('metal')
            .renderType('translucent')
            .hardness(2).resistance(2)
            .notSolid()
            .tagBlock('minecraft:mineable/pickaxe')
            .requiresTool(true)
            .property(BlockProperties.HORIZONTAL_FACING)
    )

    event.create('saltlayer')
        .displayName('Salt Layer')
        .model('kubejs:block/saltlayer')
        .soundType('sand')
        .hardness(2).resistance(2)
        .property(BlockProperties.WATERLOGGED)
        .tagBlock('minecraft:mineable/shovel')
        .requiresTool(true)
        .notSolid()
        .box(0, 0, 0, 16, 1, 16)
})
