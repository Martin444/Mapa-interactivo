import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Llorona from '../images/Lallorona.jpg'
import Hornero from '../images/Hornero.jpg'
import Src from '../music/La-Suavecita.mp3'
import PlayerAudio from '../Components/PlayerAudio';

export default class SantaFe extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Llorona} imgLeg={Hornero}
                mit="La Llorona"
                mito="La llorona es una mujer alta y estilizada cuyo atuendo es de color blanco aunque es dificil distingir sus rasgos faciales.
                Los relatos populares, la describen también como una mujer sin pies. El mito de la llorona afirma que su eterno penar se debe a que busca un hijo recien nacido que asesinó arrojandolo al río para ocultar un pecado."
                legend="El hornero"
                leyenda='Una de las leyendas de este pájaro dice que "el hornero era un bravo cazador, que vivía en apartado lugar, sólo con su padre. Amaba el joven a una muchacha cantora que conociera en una de sus excursiones, pero llegado a la edad juvenil tuvo que someterse a la triple prueba de virilidad que era obligatoria en su tribu. El triunfador obtendría la hija del cacique como prenda.

                Para ello debía vencer en dos carreras, una a pie y otra nadando y luego someterse a la prueba del ayuno. Esta consistía en estar encerrado, inmóvil entre cueros y sin tomar más que líquido durante nueve días.
                
                Cuenta la tradición que el bravo cazador triunfó en todas las pruebas, pero se demoraron en ir a sacarlo del saco de cuero. Cuando lo hicieron comprobaron que se achicaba hasta convertirse en un pequeño pájaro de plumas apagadas. Y desde su lugar de encierro voló hasta la cima de un lapacho, donde lanzó su primer y melodioso canto, renunciando de este modo a la hija del cacique.
                
                Pero, con el tiempo, aquella muchacha también se convirtió en ave y voló a hacerle compañía"'
                />
                <h5>Música</h5>
                <PlayerAudio
                src={Src}
                song='La Suavecita'
                artist='Los Palmeras ft Soledad'
                />
            </div>
        )
    }
}
