import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Chacarita from '../images/chacarita.jpg'
import Linea from '../images/linea.jpg'

export default class CABA extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Chacarita} imgLeg={Linea}
                mit="El ahorcado del cementerio de Chacarita"
                mito="Hay más de un mito urbano que encierra este cementerio, como el del ahorcado. Muchos juran haber visto un hombre colgado del árbol que se encuentra en la esquina de Jorge Newbery. Explican que se trata de un señor grande, que aparece de noche, supuestamente en los días de luna llena.

                Muchos testigos explican que se nota su estado fantasmagórico, ya que se puede ver a través de él y que desaparece a los segundos de haberlo visto."
                legend="Seres en el subte de la Linea A"
                leyenda="En la red de subterráneos más vieja de la Argentina hay un mito de que en la media estación, entre Alberdi y Pasco, hay seres sobrenaturales, que aparecen en los vagones durante los últimos viajes del día.
                Varios pasajeros confesaron que, cuando pasaban por esta parte del recorrido, las luces del vagón titilan y hasta por momentos se oscurece todo completamente. En ese instante, se pueden ver los fantasmas que “viven” allí.
                Cuenta la leyenda que, mientras se realizaba la construcción de la media estación, ocurrieron múltiples hechos escalofriantes. El principal fue la muerte de dos obreros italianos por la caída de una viga, en medio de la edificación. Debido a esto, se canceló por completo el desarrollo de la misma y muchos sostienen que los ven sentados o parados en las vías, mirando a los pasajeros."
                />
            </div>
        )
    }
}
