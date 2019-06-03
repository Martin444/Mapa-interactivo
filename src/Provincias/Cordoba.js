import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Jinete from '../images/jinete.jpg'
import Pelada from '../images/pelada.jpg'

export default class Cordoba extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Jinete} imgLeg={Pelada}
                mit="El Jinete en llamas"
                mito='En la bajada San Roque, hoy avenida Julio Argentino Roca, solía aparecer un jinete envuelto en llamas, según aseguraban los asustados paseantes nocturnos. Incluso, se cuenta que algunos personajes que andaban en tren de serenatas, ante la aparición, no titubeaban en huir y abandonar sus instrumentos.

                "Este jinete, como los del Apocalipsis, se veía solo las noche en que iban a producirse hechos sangrientos por el contorno. Y no fallaba, porque como salía los sábados, era seguro que los vecinos del hoy Pueblo Güemes no iban a dejar pasar la noche sin darse algunas puñaladitas", decía La Voz del Interior, el 5 de febrero de 1930.'
                legend="La pelada de la cañada"
                leyenda='
                Corría el año 1885, año en que se implantaba la Ley Nacional del Servicio Militar Obligatorio. Además en ese mismo año, Leopoldo Lugones fundaba el primer Centro Socialista. Por esos tiempos, todavía Córdoba se alumbraba por las noches, con farolitos a gas de carburo de calcio y la ciudad se constituía en una aldea esencialmente religiosa, que se acostaba con murmullos de rezos y se despertaba al tañer de las campanas de sus iglesias.
                
                
                
                Se vivía en una época de duendes y fantasmas. La superstición o la credulidad del pueblo, se entremezclaba con creencias esotéricas, donde proliferaban sucedidos y leyendas que corrían en las tertulias familiares llegando esos comentarios a atemorizar las mentes infantiles, hasta en las horas de “las inevitables siestas”, creando duendes y fantasmas, merced al clima propicio de aquella sociedad.
                
                
                
                En cada baldío o zanjón, la imaginación de aquellos habitantes creaba un fantasma, nos atreveríamos a pensar. Los lugares mas aprensivos por lo sombrío del panorama, solía ser La Cañada, culpable también de las inundaciones traicioneras.
                
                Fue justamente en La Cañada, especialmente en el trayecto desde Las Cinco Esquinas hasta su desembocadura con él rió, que empezó por aquellos años a aparecer un fantasma, que durante largo tiempo provocó el temor de muchos cordobeses, para después convertirse en una leyenda.
                
                Las características de este aparecido, según los comentarios, de los que decían que lo vieron: “Era movediza, tenía una lustrosa pelada, vestía de blanco y crecía y sé encogía con facilidad”. Tratábase de “La Pelada de la Cañada”. De Pronto se aparecía cerca de la Capilla del Niño Dios (que se ubicaba en la intersección de la calle San Juan y La Cañada), como por las inmediaciones de la vieja fábrica de porcelana, por la calle Rioja.
                
                
                
                Tal vez aprovechando la fama de “la Pelada de la Cañada”, sin dudas, habrían aparecido algunos imitadores. Pero lo cierto es, que entre los asaltados por este fantasma, habría un comerciante “turco” que decía se le había aparecido por la fabrica de porcelana. Lo interesante del caso, era que del susto recibido, no podía bajarse del caballo que montaba, y pretendía por ese inconveniente, hacer la denuncia desde su cabalgadura. Cuentan que el comisario no encontraba la manera de hacer descender del animal al denunciante y al preguntarle el “por qué de su actitud”, contestole el turco de marras:
                
                Pasar señur comesario, que la Belada de la Cañada, ha asustado al caballo mío y ahora no dejar bajar al pobre turco…'
                />
            </div>
        )
    }
}
