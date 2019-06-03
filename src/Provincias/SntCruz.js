import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Calafate from '../images/calafate.jpg'

export default class SntCruz extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgLeg={Calafate}
                mit="No se a encontrado Mitos relacionados a esta Provincia"

                legend="La leyenda del Calafate"
                leyenda='Los bosques de ñires, lengas y coihues comienzan a tomar un tono característico, anunciando el otoño y dando a los árboles una gama multicolor, desde el rojo intenso pasando por los matices del dorado al anaranjado. Esta transformación se viene repitiendo año tras año, desde épocas inmemorables.
                En este paisaje vivían los tehuelches, dueños originarios de la tierra, quienes al llegar el invierno comenzaban a emigrar a pie hacia el norte, donde el frío no era tan intenso y la caza no faltaba.
                En relación con estas migraciones, la tradición patagónica conserva una leyenda. Se dice que cierta vez Koonex, la anciana curandera de una tribu de tehuelches, no podía caminar más, ya que sus viejas y cansadas piernas estaban agotadas, pero la marcha no se podía detener. Entonces, Koonex comprendió la ley natural de cumplir con el destino. Las mujeres de la tribu confeccionaron un toldo con pieles de guanaco y juntaron abundante leña y alimentos para dejarle a la anciana curandera, despidiéndose de ella con el canto de la familia.
                Koonex, de regreso a su casa, fijó sus cansados ojos a la distancia, hasta que la gente de su tribu se perdió tras el filo de una meseta. Ella quedaba sola para morir. Todos los seres vivientes se alejaban y comenzó a sentir el silencio como un sopor pesado y envolvente.
                El cielo multicolor se fue extinguiendo lentamente. Pasaron muchos soles y muchas lunas, hasta la llegada de la primavera. Entonces nacieron los brotes, arribaron las golondrinas, los chorlos, los alegres chingolos, las charlatanas cotorras. Volvía la vida.
                Sobre los cueros del toldo de Koonex, se posó una bandada de avecillas cantando alegremente. De repente, se escuchó la voz de la anciana curandera que, desde el interior del toldo, las reprendía por haberla dejado sola durante el largo y riguroso invierno.
                Un chingolito, tras la sorpresa, le respondió: "nos fuimos porque en otoño comienza a escasear el alimento. Además durante el invierno no tenemos lugar en donde abrigarnos." "Los comprendo", respondió Koonex, "por eso, a partir de hoy tendrán alimento en otoño y buen abrigo en invierno, ya nunca me quedaré sola" y luego la anciana calló.
                Cuando una ráfaga de pronto volteó los cueros del toldo, en lugar de Koonex se hallaba un hermoso arbusto espinoso, de perfumadas flores amarillas. Al promediar el verano las delicadas flores se hicieron fruto y antes del otoño comenzaron a madurar tomando un color azulmorado de exquisito sabor y alto valor alimentario. Desde aquél día algunas aves no emigraron más y las que se habían marchado, al enterarse de la noticia, regresaron para probar el novedoso fruto del que quedaron prendados.
                Los tehuelches también lo probaron, adoptándolo para siempre. Desparramaron las semillas en toda la región y, a partir de entonces, "el que come Calafate, siempre vuelve."'
                />
            </div>
        )
    }
}
