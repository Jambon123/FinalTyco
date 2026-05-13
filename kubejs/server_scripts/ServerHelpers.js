//priority: 10000

global.pvHelpers = global.pvHelpers || {};

var VOLTAGE_MAP = {
    //Voltage
    "ulv": GTValues.V[GTValues.ULV],
    "lv": GTValues.V[GTValues.LV],
    "mv": GTValues.V[GTValues.MV],
    "hv": GTValues.V[GTValues.HV],
    "ev": GTValues.V[GTValues.EV],
    "iv": GTValues.V[GTValues.IV],
    "luv": GTValues.V[GTValues.LuV],
    "zpm": GTValues.V[GTValues.ZPM],
    "uv": GTValues.V[GTValues.UV],
    "uhv": GTValues.V[GTValues.UHV],
    "uev": GTValues.V[GTValues.UEV],
    "uiv": GTValues.V[GTValues.UIV],
    "uxv": GTValues.V[GTValues.UXV],
    "opv": GTValues.V[GTValues.OpV],
    "max": GTValues.V[GTValues.MAX],

    //Voltage Adjusted
    "ulva": GTValues.VA[GTValues.ULV],
    "lva": GTValues.VA[GTValues.LV],
    "mva": GTValues.VA[GTValues.MV],
    "hva": GTValues.VA[GTValues.HV],
    "eva": GTValues.VA[GTValues.EV],
    "iva": GTValues.VA[GTValues.IV],
    "luva": GTValues.VA[GTValues.LuV],
    "zpma": GTValues.VA[GTValues.ZPM],
    "uva": GTValues.VA[GTValues.UV],
    "uhva": GTValues.VA[GTValues.UHV],
    "ueva": GTValues.VA[GTValues.UEV],
    "uiva": GTValues.VA[GTValues.UIV],
    "uxva": GTValues.VA[GTValues.UXV],
    "opva": GTValues.VA[GTValues.OpV],
    "maxa": GTValues.VA[GTValues.MAX],

    "ulvh": GTValues.VH[GTValues.ULV],
    "lvh": GTValues.VH[GTValues.LV],
    "mvh": GTValues.VH[GTValues.MV],
    "hvh": GTValues.VH[GTValues.HV],
    "evh": GTValues.VH[GTValues.EV],
    "ivh": GTValues.VH[GTValues.IV],
    "luvh": GTValues.VH[GTValues.LuV],
    "zpmh": GTValues.VH[GTValues.ZPM],
    "uvh": GTValues.VH[GTValues.UV],
    "uhvh": GTValues.VH[GTValues.UHV],
    "uevh": GTValues.VH[GTValues.UEV],
    "uivh": GTValues.VH[GTValues.UIV],
    "uxvh": GTValues.VH[GTValues.UXV],
    "opvh": GTValues.VH[GTValues.OpV],
    "maxh": GTValues.VH[GTValues.MAX],

    "ulvha": GTValues.VHA[GTValues.ULV],
    "lvha": GTValues.VHA[GTValues.LV],
    "mvha": GTValues.VHA[GTValues.MV],
    "hvha": GTValues.VHA[GTValues.HV],
    "evha": GTValues.VHA[GTValues.EV],
    "ivha": GTValues.VHA[GTValues.IV],
    "luvha": GTValues.VHA[GTValues.LuV],
    "zpmha": GTValues.VHA[GTValues.ZPM],
    "uvha": GTValues.VHA[GTValues.UV],
    "uhvha": GTValues.VHA[GTValues.UHV],
    "uevha": GTValues.VHA[GTValues.UEV],
    "uivha": GTValues.VHA[GTValues.UIV],
    "uxvha": GTValues.VHA[GTValues.UXV],
    "opvha": GTValues.VHA[GTValues.OpV],
    "maxha": GTValues.VHA[GTValues.MAX],
}

global.pvHelpers.constVoltages = function(getVoltage) {
    if (typeof getVoltage === 'undefined') {
        voltage = GTValues.VA[GTValues.MAX]
        console.warn('[pv] constVoltages called with empty value');
        return voltage;
    };

    var key = String(getVoltage).toLowerCase();
    var voltage = VOLTAGE_MAP[key]

    return voltage;
};

global.pvHelpers.easyGTRecipe = function(event) {
    return function(recipetype, recipename, durationseconds, voltage, circuit, inputitem, inputfluid, outputitem, outputfluid) {
        if (typeof recipetype === 'undefined' || recipetype === null) recipetype = "fermenter";
        if (typeof recipename === 'undefined' || recipename === null) recipename = recipename = `${recipetype}_broken_recipe_${Date.now()}`;
        if (typeof durationseconds === 'undefined' || durationseconds === null) durationseconds = 10;

        var recipeTypeKey = String(recipetype).trim().toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
        var recipeBuilder = event.recipes.gtceu[recipeTypeKey](recipename);
        var normalisedInputItems = global.pvHelpers.assureArray(inputitem)
        var normalisedInputFluids = global.pvHelpers.assureArray(inputfluid)
        var normalisedOutputItems = global.pvHelpers.assureArray(outputitem)
        var normalisedOutputFluids = global.pvHelpers.assureArray(outputfluid)

        recipeBuilder.duration(global.pvHelpers.secondsToTicks(durationseconds))
        if(voltage) {recipeBuilder.EUt(global.pvHelpers.constVoltages(voltage))}
        if(circuit) {recipeBuilder.circuit(circuit)}
        if (normalisedInputItems.length > 0) {recipeBuilder.itemInputs.apply(recipeBuilder, normalisedInputItems);}
        if (normalisedInputFluids.length > 0) {recipeBuilder.inputFluids.apply(recipeBuilder, normalisedInputFluids);}
        if (normalisedOutputItems.length > 0) {recipeBuilder.itemOutputs.apply(recipeBuilder, normalisedOutputItems);}
        if (normalisedOutputFluids.length > 0) {recipeBuilder.outputFluids.apply(recipeBuilder, normalisedOutputFluids);}

        console.info(`[pv] Registering recipe ${recipename} for ${recipetype} at ${voltage} taking ${durationseconds} seconds.`)

        return recipeBuilder
    };};

global.pvHelpers.massRemoveRecipesBy = function(event, field, values) {
    values.forEach(function(value) {
        var criteria = {}
        criteria[field] = value
        event.remove(criteria)
})}

global.pvHelpers.swapAndeasyGTRecipe = function(event) {
    return function(keep, oldrecipetype, oldrecipename, recipetype, durationseconds, voltage, circuit, inputitem, inputfluid, outputitem, outputfluid) {
        if(!keep) {
            event.remove({id: `gtceu:${oldrecipetype}/${oldrecipename}`})
            console.info(`[pv] Removing ${oldrecipename} for ${oldrecipetype}`)}
        let newrecipename = `converted_${oldrecipetype}_to_${recipetype}_${oldrecipename}`
        global.pvHelpers.easyGTRecipe(event)(recipetype, newrecipename, durationseconds, voltage, circuit, inputitem, inputfluid, outputitem, outputfluid)
    }
}


