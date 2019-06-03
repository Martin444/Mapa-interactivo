import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Rivadavía from '../images/rivadavia.jpg'
import Teatro from '../images/teatro.jpg'

export default class BsAs extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Rivadavía}
                mit="Los fantasmas del hospitas Rivadavía"
                mito='"El fantasma de la enfermera", la imagen de una mujer regordeta, vestida con el delantal y la cofia típicos del uniforme de otra época, que se corporizó en diversas ocasiones. En el museo hay una antigua foto del personaje que dio origen al mito. Celia cuenta que años atrás, en el área de Genética, una estudiante observaba muy concentrada a través del microscopio cuando, de pronto, sintió una presencia a sus espaldas. Pensó que era un compañero que buscaba hacerle una broma. Al darse vuelta, vio el espíritu. La pasante nunca quiso volver a trabajar.'
                imgLeg={Teatro}
                legend="Duendes en el teatro Colón"
                leyenda="Se dice que, entre la amplia gama de duendes, están los que se alimentan de las emociones humanas y de la música…y un lugar como la Opera de Buenos Aires parece bastante idóneo para estar habitado por esta clase de inquilinos…
                Los investigadores van al Teatro Colón, habiendo oído los rumores, y se entrevistaron con uno de los referentes del área de carpintería. Habiéndole preguntado por los sonidos extraños que se oyen tras las funciones, éste los atribuyó al hecho de que la madera tras funciones donde se recalienta (y reacomoda) por la potencia de los focos, se enfría y vuelve a su posición original, generando los sonidos.
                Sin embargo, les presentó a otro empleado, de nombre Avalos, que creía realmente en estos duendes. Avalos contó que, en el 2002 encontraron muerto al jefe de Mayordomía, y las causas de su muerte de debieron a un infarto debido a algo que vió… la leyenda diciendo que fueron duendes. Incluso, contó que hay historias sobre una empleada de limpieza que, habiendose quedado encerrada por accidente en un palco una noche, enloqueció escuchando como le cantaban voces….y terminó renunciando ni bien la encontraron encerrada."
                />
            </div>
        )
    }
}
