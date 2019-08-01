import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Familiar from '../images/elFamiliar.jpg'
import Castoral from '../images/castoral.jpg'
import Src from '../music/Nostalgias Tucumanas.mp3'
import PlayerAudio from '../Components/PlayerAudio';


export default class Tucuman extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Familiar} imgLeg={Castoral}
                mit="El Familiar"
                mito="La principal actividad económica de Tucumán es la industria azucarera. En relación con esta actividad se difundió una de las leyendas más conocidas en el norte argentino. Se trata de El Familiar, que en la provincia se lo conoce como un feroz y enorme perro negro sin cabeza que arrastra una pesada cadena y que por las noches se pasea en medio de los cañaverales. Se dice que los dueños de los ingenios, realizaban un contrato con el Diablo por el cual éste podía comerse unos cuantos peones para que la industria tenga un año próspero. La forma de contrarrestar su ataque es con un rosario, una cruz, un puñal y mucha valentía o Fe. Hoy en día, se llama el Familiar, a un capataz odiado o un jefe de sección arbitrario"
                legend="LEYENDA DEL CASTILLO DEL CASTORAL"
                leyenda="El salón blanco de la Casa de Gobierno de Tucumán, es el salón más importante de esta sede. Hay quienes aseguran que las luces que se encuentran en este salón pertenecían al Salón de Fiestas del Castillo ``El Castoral´´. Este castillo, actualmente en ruinas, está ubicado en las afueras de Simoca, a orillas del Río Salí, data de 1913 y fue construido por el alemán, Otto Ruckaeberle. El castillo recibió el nombre de el Castoral, ya que allí se cultivaba el castor de cuyas semillas se extraía un aceite tipo industrial, que el alemán comercializaba en Europa. La leyenda cuenta que fue una mujer francesa muy hermosa quien le pidió al alemán la construcción de esta propiedad como prueba de su amor. En su época de esplendor los dueños del castillo ofrecían fiestas en las que predominaban el licor, las mujeres y la música.
                Luego de unos años el europeo desapareció cuando aquella dama, decepcionada con la vida en los campos subtropicales sudamericanos, lo abandonó"
                />
                <h5>Música</h5>
                <PlayerAudio
                src={Src}
                song='Nostalgias Tucumanas'
                artist='Chaqueño Palavecino'
                />
            </div>
        )
    }
}
