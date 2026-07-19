// priority: 69

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("all_planets")
        .targets("#pvworld:all_ore_replaceables") // [*] 
        .dimensions("minecraft:overworld", "genesis:moon", "pvworld:glugg", "pvworld:cindel", "pvworld:enger") // [*]
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("offworld")
        .targets("#pvworld:all_ore_replaceables") // [*] 
        .dimensions("genesis:moon", "pvworld:glugg", "pvworld:cindel", "pvworld:enger") // [*]
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("coal_planets")
        .targets("#pvworld:all_ore_replaceables") // [*] 
        .dimensions("pvworld:glugg", "pvworld:cindel") // [*]
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("noom")
        .targets("#genesis:base_stone_moon") // [*] 
        .dimensions("genesis:moon") // [*]
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("glugg")
        .targets("#minecraft:stone_ore_replaceables") // [*] 
        .dimensions("pvworld:glugg") // [*]
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("cindel")
        .targets("#pvworld:cindel_ore_replaceables") // [*] 
        .dimensions("pvworld:cindel") // [*]
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("enger")
        .targets("#pvworld:all_ore_replaceables") // [*] 
        .dimensions("pvworld:enger") // [*]
})