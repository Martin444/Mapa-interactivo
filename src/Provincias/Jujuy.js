import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Duende from '../images/Elduende.jpg'
import Coquena from '../images/coquena.png'

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
                
                imgLeg={Coquena}
                legend="Coquena"
                leyenda="Coquena protege a las vicuñas, las llamas y a los guanacos. Es enano y toda su ropa es de lana de vicuña. Calza pequeñas ojotas. Anda silbando por los cerros, coquea todo el día y se esconde de la mirada de las personas. Siempre esta vigilando a estos camélidos que pastan en la puna.
                Dice que cuando se ve a lo lejos moverse las tropas de camélidos sin pastores que las guíen, es Coquena que las esta llevando a lugares con mejor pasto. También se dice que por las noches lleva rebaños cargados de oro y plata de distintas minas de la puna hacia el Cerro Sagrado de Potosí para que las riquezas de este nunca se agoten. Cuentan que ata los bultos con vibras en vez de sogas.
                Es raro encontrarse con Coquena, pero cuando se lo ve es solo por un instante, porque rápidamente se transforma en un espíritu.
                Suele recompensar con virtudes a quien no daña a las llamas y las vicuñas, pero captura con dureza a los cazadores de esos animalitos y a aquellos arrieros que suelen sobrecargar las alforjas, y a los buenos pastores los premia con monedas de oro. "/>
            </div>
        )
    }
}
