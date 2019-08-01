import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Duende from '../images/Elduende.jpg'
import Familiar from '../images/elFamiliar.jpg'
import MeGusta from '../music/Me gusta Jujuy.mp3'
import PlayerAudio from '../Components/PlayerAudio';

export default class Jujuy extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Duende}
                mit="El Duende"
                mito="El duende es un ser chiquito de unos cuarenta o cincuenta centimetros, un niño que ha muerto sin ser bautizado o ha sido abortado. Es cabezon, tiene astitas, piernas cortas, los brazos apenas llegan a la cintura. Le tapa la cara un sombrero bien grande , blanco o negro
                Llora como una criatura ,tiene una mano de hierro y otra de lana y siempre golpea con la de hierro.Es muy fuerte y puede vencer varios hombres juntos ,regresa ala cas donde ha vivido como niño olugares donde ha muerto,mueve cosas anda por todas partes con su trotecito rie hace ruida y arroja piedras al techo para no dejar dormir
                Cuando el duende toma una casa ya no deja vivir y hay que mudarse lejos, pero no debe olvidarse nada: el duende lo seguiria atodas partes llevando cualquier objeto que los dueños que hayan dejado
                Cuentan en el lejano pueblo de Cusi Cusi que existe un duende que con el correr de los años ha crecido se ha trasnformado en personas ya fallecidas que se les aparece a los familiares, las personas que lo han visto se trastornan" 
                
                imgLeg={Familiar}
                legend="El Familiar"
                leyenda={<>
                <p>Esta leyenda nació en los ingenios azucareros del norte argentino, como Tabacal en Salta, La Esperanza en Jujuy, y otros sitios en Tucumán.</p><br/>
                <p>Para poder salir de los problemas económicos que afectaban a sus empresas, los dueños pactaban con el demonio, a quien le ofrecían a modo de sacrificio la vida de sus peones.</p><br/>
                <p>Así, cuenta la leyenda que los dueños hacían un pacto con el mismo demonio, para poder salir del pozo financiero. Era un enorme perro negro quien devoraba a los obreros, augurando un próspero año.</p><br/>
                <p>Si bien ninguna persona pudo tener contacto con esta criatura, se cree que dormía en un sótano de los ingenios y atacaba de noche.</p><br/>
                </>}
                
                />
                <h5>Música</h5>
                <PlayerAudio 
                src={MeGusta}
                song='Me gusta Jujuy cuando llueve'
                artist='Los Chalchaleros'
                />
            </div>
        )
    }
}
