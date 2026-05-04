GTCEuStartupEvents.registry('gtceu:element', event => {

    event.create('pure_plutonium')
        .protons(1000000)
        .neutrons(1000000)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Pu')
        .isIsotope(false)

    event.create('sp')
        .protons(1000000)
        .neutrons(1000000)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol('Sp')
        .isIsotope(false)

    event.create("energium")
        .protons(10000)
        .neutrons(10000)
        .halfLifeSeconds(-1).decayTo(null)
        .symbol('⚡')
        .isIsotope(false)

})

GTCEuStartupEvents.registry('gtceu:material', event => {
    
    event.create('sp')
        .element(GTElements.get('sp'))
        .color(0xffffff).iconSet(GTMaterialIconSet.DULL)
    
    event.create('pure_plutonium')
        .element(GTElements.get('pure_plutonium'))
        .color(0xffffff).iconSet(GTMaterialIconSet.DULL)

    event.create("energium")
        .element(GTElements.get("energium"))
        .color(0xffffff).iconSet(GTMaterialIconSet.DULL)

    event.create("pure_energium")
        .name()
        .gem()
        .liquid(new GTFluidBuilder().block().temperature(300))
        .gas()
        .plasma()
        .components('2x energium')
        .color(0xb24cd8).secondaryColor(0x7f3fb2)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_FRAME)


    event.create('black_plutonium')
        .ingot()
        .components('1x sp', '1x pure_plutonium')
        .color(0x222222)
        .secondaryColor(0x000000)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
    )
})
