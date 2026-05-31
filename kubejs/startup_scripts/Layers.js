GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('Noom')
    .targets('#minecraft:stone_ore_replaceables', 'genesis:moon_stone') // [*] 
        .dimensions('genesis:moon') // [*]
})  