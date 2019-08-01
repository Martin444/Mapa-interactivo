import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Perro from '../images/perronegro.gif'
import Pampa from '../images/pampa.jpg'
import LaPampe from '../music/De-sombras-largas.mp3'
import PlayerAudio from '../Components/PlayerAudio';

export default class LaPampa extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Perro} imgLeg={Pampa}
                mit="El Perro Negro"
                mito="Quienes han visto a este animal cuentan que de lejos es un perro común y corriente, pero al acercarse... muestra sus grandes ojos del tamaño de un plato y color rojo fuego. De su cuello cuelga una maciza cadena de oro puro y tiene la particularidad de aparecer sólo una vez al mes. Se dice que es el guardián de la veta más rica de oro que existe en el mundo y muchos de los calicheros se sintieron atraídos por su siniestra figura, señal inequivoca de fortunas inimaginables. Para obtenerla sólo había que seguirlo y observar donde escarbaba. Ahí había que dejar un puñal con la punta muy afilada, para que la veta no se corra y volver al día siguiente a excavar. Sin embargo muchos desistieron porque no hay ser humano capaz de resistir el terror que esta fiera inspira.

                Y es que este famoso can azabache es el guardián del diablo y sólo obedece a su amo, quien acostumbra a llamarlo con un silbido tan penetrante que resuena en poblados enteros."
                legend="Pampa Union"
                leyenda="La hoy en ruinas ciudadela de Pampa Unión es quizás uno de los lugares ligados a la actividad salitrera más populares y emblemáticos. Por décadas su nombre fue sinónimo de bohemia, mujeres complacientes, comercio y parrandas eternas. Por eso dicen que una enigmática mujer llegó del más allá para darle un nuevo giro a esta historia y, tal vez, vengarse por el desprecio de un amor. Sólo hace un par de meses la vieron por última vez. Portaba un látigo y estaba vestida con el traje de cuero negro que resalta sus curvas. Con su rostro claro, indefectible, escolta un hombre encadenado y con el torso desnudo... como un verdadero esclavo. Desde hace algún tiempo es el comentario obligado de los choferes de buses y automovilistas, que en medio de la noche, pálidos de pánico, no han tenido el atrevimiento de detenerse para descubrir el misterio tras su figura."
                />
                <h5>Música</h5>
                <PlayerAudio 
                src={LaPampe}
                song='De sombras Largas'
                artist='Roberto Yacomuzzi'
                />
            </div>
        )
    }
}
