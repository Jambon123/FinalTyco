//priority: 99
ServerEvents.recipes(event => {
    const gtRecipe = global.pvHelpers.easyGTRecipe(event)

    event.replaceInput({mod: "ae2", input:"#forge:ingots/iron"}, "#forge:ingots/iron", "gtceu:steel_ingot")
    event.replaceInput({id: "ae2:wireless_part"}, "ae2:fluid_pearl", "ae2:fluix_crystal")
})