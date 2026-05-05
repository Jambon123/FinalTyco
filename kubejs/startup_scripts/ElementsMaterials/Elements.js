// Icon Sets
const SHINY = GTMaterialIconSet.SHINY;
const BRIGHT = GTMaterialIconSet.BRIGHT;
const DULL = GTMaterialIconSet.DULL;
const FINE = GTMaterialIconSet.FINE;
const ROUGH = GTMaterialIconSet.ROUGH;

const FLUID = GTMaterialIconSet.FLUID;

const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
const CERTUS = GTMaterialIconSet.CERTUS;
const QUARTZ = GTMaterialIconSet.QUARTZ;
const EMERALD = GTMaterialIconSet.EMERALD;
const DIAMOND = GTMaterialIconSet.DIAMOND;
const RUBY = GTMaterialIconSet.RUBY;
const OPAL = GTMaterialIconSet.OPAL;
const LAPIS = GTMaterialIconSet.LAPIS;
const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;

const FLINT = GTMaterialIconSet.FLINT;
const SAND = GTMaterialIconSet.SAND;
const WOOD = GTMaterialIconSet.WOOD;
const GLASS = GTMaterialIconSet.GLASS;
const LIGNITE = GTMaterialIconSet.LIGNITE;

const METALLIC = GTMaterialIconSet.METALLIC;

// Flags
// Generic flags
const no_recipes = GTMaterialFlags.DISABLE_MATERIAL_RECIPES;
const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
const explosive = GTMaterialFlags.EXPLOSIVE;
const flammable = GTMaterialFlags.FLAMMABLE;
const sticky = GTMaterialFlags.STICKY;
const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Dust Required
const plates = GTMaterialFlags.GENERATE_PLATE;
const dense_plate = GTMaterialFlags.GENERATE_DENSE;
const rod = GTMaterialFlags.GENERATE_ROD;
const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
const frame = GTMaterialFlags.GENERATE_FRAME;
const gear = GTMaterialFlags.GENERATE_GEAR;
const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
const no_craft_block = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
const no_craft_plate_compressor = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
const no_craft_hand = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
const no_working = GTMaterialFlags.NO_WORKING;
const no_smashing = GTMaterialFlags.NO_SMASHING;
const no_smelt = GTMaterialFlags.NO_SMELTING;
const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;
const no_tab = GTMaterialFlags.NO_ORE_PROCESSING_TAB
// Ingot Required
const foil = GTMaterialFlags.GENERATE_FOIL;
const ring = GTMaterialFlags.GENERATE_RING;
const spring = GTMaterialFlags.GENERATE_SPRING;
const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
const rotor = GTMaterialFlags.GENERATE_ROTOR;
const round = GTMaterialFlags.GENERATE_ROUND;
const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Required
const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Required
const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Required
const high_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;

GTCEuStartupEvents.registry('gtceu:element', event => {
    // const elem = global.easyElementFunction
    event.create("energium")
        .protons(-1).neutrons(-1)
        .halfLifeSeconds(-1).decayTo(null)
        .symbol('⚡')
        .isIsotope(false)

    event.create("engeriophage")
        .protons(-1).neutrons(-1)
        .halfLifeSeconds(-1).decayTo(null)
        .symbol('ð')
        .isIsotope(false)

// elem("engeriophage","~",-1,-1,-1,null,false)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("energium")
        .element(GTElements.get("energium"))
        .color(0xffffff)

    event.create("engeriophage")
        .element(GTElements.get("engeriophage"))
        .color(0xffffff)

    event.create("pure_energium")
        .gem()
        .liquid(new GTFluidBuilder().block().temperature(300))
        .gas(762)
        .plasma(8621)
        .components('6x energium')
        .color(0xb24cd8).secondaryColor(0x7f3fb2)
        .iconSet(CERTUS)
        .flags(
            frame, plates, dense_plate, long_rod, crystallizable, lens)

    event.create("infected_energium")
        .ingot()
        .components("5x energium", "1x engeriophage")
        .color(0xb24cd8).secondaryColor(0x71d84c)
        .iconSet(CERTUS)
        .flags(
            round)

        event.create("infected_depleted_energium")
        .ingot()
        .components("4x energium", "1x engeriophage")
        .color(0x4c1560).secondaryColor(0x71d84c)
        .iconSet(CERTUS)
        .flags(
            round)

        event.create("depleted_energium")
        .ingot()
        .components("5x energium")
        .color(0x4c1560).secondaryColor(0x7f3fb2)
        .iconSet(CERTUS)
        .flags(
            round)
})
