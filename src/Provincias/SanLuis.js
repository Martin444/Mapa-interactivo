import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import PataSola from '../images/patasola.jpg'
import Cuesta from '../images/cuesta.jpg'


export default class SanLuis extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={PataSola} imgLeg={Cuesta}
                mit="La Pata Sola"
                mito="Dicen que la pata sola era una joven muy grosera y brava con su madre, un día la mamá se levantó enojada y le cortó una pierna con un hacha y desde entonces se puso una guadua, de la rodilla hacia abajo en el pie que le habían cortado. Esta se internó en la montaña para no seguir conviviendo con su madre. Una vez allí se convirtió en un espíritu maligno, el cual se dedicaba a asustar a la gente cuando pasaba por sitios oscuros, en ese momento pegaba gritos muy fuertes con los cuales hacia estremecer a los caminantes y si ellos le contestaban,  el grito los seguía y los hacía perder en la montaña."
                legend="La cuesta del Gato"
                leyenda='Cuenta la leyenda que hace ya tiempo, en San Luis (Arg.) una chica que estaba por casarse, estaba yendo junto sus tres amigos rumbo a la Iglesia un jeep, dicen que el que manejaba iba parado y lo hicieron sentar, al sentarse perdió el control del auto y cayeron al precipicio. Todos se salvaron menos la chica que murió en el acto, dicen que si vas manejando rápido por la "Cuenca del Gato" de noche o se te aparece adelante en el capo del auto o si no aparece en el asiento de atrás del auto'
                
                />
            </div>
        )
    }
}
