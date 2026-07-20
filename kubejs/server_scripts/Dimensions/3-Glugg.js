//priority: 104
ServerEvents.recipes(event => {
    const gtRecipe = global.pvHelpers.easyGTRecipe(event)

    gtRecipe("fluid_heater","heat_gb_to_cgb",0.25,"mva", null, //Fundamentals
        null,"pvcore:brine 20", //Inputs
        null,"pvintegration:concentrated_glugg_brine 10") //Outputs

    gtRecipe("distillation_tower","distill_cgb_to_glugg_goo_etc",20, "mva", null,
        null, "pvintegration:concentrated_glugg_brine 200", //Inputs
        "1x pvintegration:heavy_glugg_goo_gem",["gtceu:steam 500","gtceu:salt_water 200","gtceu:oil 50"] //Outputs
    )

    gtRecipe("centrifuge", "centrifuge_heavy_glugg_goo_to_glugg_goo", 10, "mva", null,
        "2x pvintegration:heavy_glugg_goo_gem", null, //Inputs
        ["1x pvintegration:glugg_goo_gem", "3x gtceu:titanium_dust"],null //Outputs
    )
})