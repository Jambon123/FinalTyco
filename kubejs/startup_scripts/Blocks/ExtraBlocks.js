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

    facingBlock('gluggfish',
        event.create('gluggfish')
            .fullBlock(false)
            .displayName('Large Glugg Fish')
            .model('kubejs:block/gluggfish')	
            .soundType('crop')
            .renderType('translucent')
            .hardness(2.0)
            .resistance(2.0)
            .tagBlock('minecraft:mineable/sword')
            .requiresTool(true)
            .notSolid()
            .property(BlockProperties.HORIZONTAL_FACING)
    )
    })