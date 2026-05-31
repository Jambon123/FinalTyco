//priority: 10000

global.pvHelpers = global.pvHelpers || {};

var ICON_MAP = {
    // Icon Sets
    SHINY: GTMaterialIconSet.SHINY,
    BRIGHT: GTMaterialIconSet.BRIGHT,
    DULL: GTMaterialIconSet.DULL,
    FINE: GTMaterialIconSet.FINE,
    ROUGH: GTMaterialIconSet.ROUGH,
    FLUID: GTMaterialIconSet.FLUID,
    GEM_HORIZONTAL: GTMaterialIconSet.GEM_HORIZONTAL,
    GEM_VERTICAL: GTMaterialIconSet.GEM_VERTICAL,
    CERTUS: GTMaterialIconSet.CERTUS,
    QUARTZ: GTMaterialIconSet.QUARTZ,
    EMERALD: GTMaterialIconSet.EMERALD,
    DIAMOND: GTMaterialIconSet.DIAMOND,
    RUBY: GTMaterialIconSet.RUBY,
    OPAL: GTMaterialIconSet.OPAL,
    LAPIS: GTMaterialIconSet.LAPIS,
    NETHERSTAR: GTMaterialIconSet.NETHERSTAR,
    FLINT: GTMaterialIconSet.FLINT,
    SAND: GTMaterialIconSet.SAND,
    WOOD: GTMaterialIconSet.WOOD,
    GLASS: GTMaterialIconSet.GLASS,
    LIGNITE: GTMaterialIconSet.LIGNITE,
    METALLIC: GTMaterialIconSet.METALLIC,
}

var FLAG_MAP = {
    // Flags
    // Generic flags
    no_recipes: GTMaterialFlags.DISABLE_MATERIAL_RECIPES,
    electrolyze: GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING,
    centrifuge: GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING,
    no_decomp: GTMaterialFlags.DISABLE_DECOMPOSITION,
    explosive: GTMaterialFlags.EXPLOSIVE,
    flammable: GTMaterialFlags.FLAMMABLE,
    sticky: GTMaterialFlags.STICKY,
    phosphorescent: GTMaterialFlags.PHOSPHORESCENT,
    // Dust Required
    plates: GTMaterialFlags.GENERATE_PLATE,
    dense_plate: GTMaterialFlags.GENERATE_DENSE,
    rod: GTMaterialFlags.GENERATE_ROD,
    bolt_and_screw: GTMaterialFlags.GENERATE_BOLT_SCREW,
    frame: GTMaterialFlags.GENERATE_FRAME,
    gear: GTMaterialFlags.GENERATE_GEAR,
    long_rod: GTMaterialFlags.GENERATE_LONG_ROD,
    block: GTMaterialFlags.FORCE_GENERATE_BLOCK,
    no_craft_block: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES,
    no_craft_plate_compressor: GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE,
    no_craft_hand: GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES,
    mortar_grind: GTMaterialFlags.MORTAR_GRINDABLE,
    no_working: GTMaterialFlags.NO_WORKING,
    no_smashing: GTMaterialFlags.NO_SMASHING,
    no_smelt: GTMaterialFlags.NO_SMELTING,
    blast_furnace_double: GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE,
    blast_furnace_triple: GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE,
    no_abs_recipe: GTMaterialFlags.DISABLE_ALLOY_BLAST,
    not_alloy: GTMaterialFlags.DISABLE_ALLOY_PROPERTY,
    no_tab: GTMaterialFlags.NO_ORE_PROCESSING_TAB,
    // Ingot Required
    foil: GTMaterialFlags.GENERATE_FOIL,
    ring: GTMaterialFlags.GENERATE_RING,
    spring: GTMaterialFlags.GENERATE_SPRING,
    small_spring: GTMaterialFlags.GENERATE_SPRING_SMALL,
    small_gear: GTMaterialFlags.GENERATE_SMALL_GEAR,
    fine_wire: GTMaterialFlags.GENERATE_FINE_WIRE,
    rotor: GTMaterialFlags.GENERATE_ROTOR,
    round: GTMaterialFlags.GENERATE_ROUND,
    magnetic: GTMaterialFlags.IS_MAGNETIC,
    // Gem Required
    crystallizable: GTMaterialFlags.CRYSTALLIZABLE,
    lens: GTMaterialFlags.GENERATE_LENS,
    // Fluid Required
    solder_mat: GTMaterialFlags.SOLDER_MATERIAL,
    solder_mat_bad: GTMaterialFlags.SOLDER_MATERIAL_BAD,
    solder_mat_good: GTMaterialFlags.SOLDER_MATERIAL_GOOD,
    // Ore Required
    high_sifter: GTMaterialFlags.HIGH_SIFTER_OUTPUT,
}

global.pvHelpers.secondsToTicks = function(seconds) {
    return Math.max(1, seconds * 20)
}

global.pvHelpers.ticksToSeconds = function(ticks) {
    return ticks / 20
}

global.pvHelpers.assureArray = function(assurance) {
    if (assurance === undefined || assurance === null) {
        return [];
    }
    if (Array.isArray(assurance)) {
        return assurance;
    }
    return [assurance]
}

global.pvHelpers.getIcon = function(iconSet) {
    var key = iconSet.toUpperCase();
    return ICON_MAP[key];
}

global.pvHelpers.resolveFlags = function resolveFlags() {
    var flagArray = [];
    for (var argIndex = 0; argIndex < arguments.length; argIndex++) {
        var arg = arguments[argIndex];
        if (Array.isArray(arg)) {
            for (var innerIndex = 0; innerIndex < arg.length; innerIndex++) {
            var subResolved = resolveFlags(arg[innerIndex]);
                for (var subIndex = 0; subIndex < subResolved.length; subIndex++) {
                    flagArray.push(subResolved[subIndex]);
            }}
            continue;}

        if (typeof arg === 'string') {
            flagArray.push(FLAG_MAP[arg.toLowerCase()]);
            continue;}

        flagArray.push(arg);
    }
    return flagArray;
};

global.pvHelpers.easyElement = function(event) {
    return function(name, symbol, proton, neutron, halflife, decayproduct, isotopic)  {
        if (typeof proton === 'undefined') proton = -1;
        if (typeof neutron === 'undefined') neutron = -1;
        if (typeof halflife === 'undefined') halflife = -1;
        if (typeof decayproduct === 'undefined') decayproduct = null;
        if (typeof isotopic === 'undefined') isotopic = false;

        console.info(`[pv] Registering ${name} as ${symbol}.`)

        return event.create(name)
            .symbol(symbol)
            .protons(proton).neutrons(neutron)
            .halfLifeSeconds(halflife).decayTo(decayproduct)
            .isIsotope(isotopic);        

};};

global.pvHelpers.elementalMaterial = function(event) {
    return function(name, colour, secondcolour, element) {
        if (typeof colour === 'undefined') colour = 0xffffff
        if (typeof secondcolour === 'undefined') secondcolour = 0x000000
        if (typeof element ===  'undefined') element = name

        console.info(`[pv] Initialising material ${name} with element ${element}.`)

        return event.create(name)
            .element(GTElements.get(element))
            .color(colour)
            .secondaryColor(secondcolour)
    };};

global.pvHelpers.setupMaterial = function(event) {
    return function(name, type, icon, colour1, colour2, harvest) {
        var materialBuilder = event.create(name);

        console.log(`[pv] Making Material ${name} of type ${type}`)

        if (typeof materialBuilder[type] === "function") {
            if (typeof harvest !== "undefined") materialBuilder[type](harvest)
            else materialBuilder[type]()
        }

        if (typeof colour1 !== "undefined") materialBuilder.color(colour1)
        if (typeof colour2 !== "undefined") materialBuilder.secondaryColor(colour2)
        if (icon !== "undefined") materialBuilder.iconSet(global.pvHelpers.getIcon(icon))

        return materialBuilder
};};

global.pvHelpers.ignoreForms = (matname, mapping) => {
    GTCEuStartupEvents.materialModification(event => {
        const mat = GTMaterialRegistry.getMaterial(matname.toString())
        for (const tag in mapping) {
            const prefix = TagPrefix[tag]
            console.info(`[pv] Trying to remove ${tag} for ${mat}`)
            if (!prefix) {
                console.error(`[pv] Unknown TagPrefix: ${tag}`)
                continue
            }
            prefix.setIgnored(mat)
        }
    })

    StartupEvents.postInit(event => {
        const mat = GTMaterialRegistry.getMaterial(matname.toString())
        for (const tag in mapping) {
            const prefix = TagPrefix[tag]
            const id = mapping[tag]
            console.log(`[pv] Linking ${tag} of ${mat} to ${id}`)

            if (!prefix) {
                console.error(`[pv] Unknown TagPrefix: ${tag}`)
                continue
            }

            if (tag === "block") {prefix.setIgnoredBlock(mat, id)} 
            else {prefix.setIgnored(mat, id)}
        }
})}
