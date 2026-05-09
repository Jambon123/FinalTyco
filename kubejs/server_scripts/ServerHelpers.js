//priority: 1

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
        voltage = GTValues.VA[GTValues.LV]
        console.warn('[pv] constVoltages called with empty value');
        return voltage;
    };

    var key = String(getVoltage).toLowerCase();
    var voltage = VOLTAGE_MAP[key]

    return voltage;
};

global.pvHelpers.easyGTRecipe = function(event) {
    return function(recipetype, recipename, durationseconds, voltage, inputfluid, inputitem, outputfluid, outputitem, circuit) {

        function assureArray(assurance) {
            if (value === undefined || value === null) {
                return [];
            }
            if (Array.isArray(value)) {
                return value;
            }
        return [value]
        }


        console.info(`[pv] Registering material ${name} with element ${element}.`)

        return event.recipes.gtceu.centrifuge(recipename) 
            var recipeTypeKey = String(recipeType).trim().toLowerCase().replace(/\s+/g, '_').replace(/-/g, '_');
            var recipeBuilder = event.recipes.gtceu[recipeTypeKey](recipeName);
        .itemInputs("2x gtceu:heavy_glugg_goo_gem")
        .inputFluids("gtceu:concentrated_glugg_brine 200")
        .outputFluids("gtceu:steam 500","gtceu:salt_water 200","gtceu:oil 50")
        .itemOutputs("1x gtceu:heavy_glugg_goo_gem")
        .duration(global.pvHelpers.ticksToSeconds(durationseconds))
        .EUt(global.pvHelpers.constVoltages(voltage))
        .circuit
    };};