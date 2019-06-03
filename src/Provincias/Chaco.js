import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Lobizon from '../images/lobizon.jpg'
import Pilcomayo from '../images/pilcomayo.jpg'

export default class Chaco extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Lobizon}
                mit="El Lobizón"
                mito="El lobizon vendría a ser uno de los mitos mas conocido en todo el mundo. Ya que esta inspirado en “el hombre lobo”.
                Según se cuenta, es un hombre común y corriente que en las noches de luna llena, se convierte en mitad-lobo y come el ganado de los campesinos."
                imgLeg={Pilcomayo}
                legend="Leyenda del origen de los rios Bermejo y Pilcomayo"
                leyenda="Dice la leyenda que, después de la creación, Tupá (Dios) confió a Guarán la administración del Gran Chaco, que se extendía más allá de la selva. Y Guarán comenzó la gran tarea. Cuidó de la fauna y la flora, de la tierra y de los montes. Y también gobernó sabiamente a su pueblo, logrando una verdadera civilización Guarán tuvo dos hijos: Tuvichavé, el mayor, que era impetuoso y decidido; y Michiveva, el menor más reposado y pacífico.

                Y Guarán, antes de morir, entregó a ellos la administración del Gran Chaco Fue entonces cuando comenzaron las pelear, entre los dos hermanos Ambos tenían opiniones diferentes respecto de cómo manejar los asuntos de la región
                
                Un día apareció Aña (genio del mal) quien leo aconsejó que compitieran entre sí con destreza para resolver las cuestiones que los enfrentaban. Tuvichavé y Michiveva, cegados por sus diferencias. decidieron hacerle caso. Subieron a los cerros que lindaban con el Gran Chaco y, para disputar su hegemonía sobre el territorio, acordaron realizar diversas pruebas habilidad como manejo de las flechas y resistencia física. En una de esas pruebas, Michiveva lanzó una flecha contra un árbol que ser-vía de blanco. Pero Añá hizo de las suyas: la desvió, y la flecha fue a dar en el corazón de Tuvichavé. Al instante, la sangre brotó con fuerza y comenzó a correr y a bajar por los cerros llegó hasta el Chaco, se internó en Su territorio y formó un río de color rojo: el (Bermejo Al darse cuenta de lo que había hecho, Michiveya lloró.
                
                ---Y lloró tanto, que sus lágrimas corrieron tras el río de sangre de su hermano Así se formó
                
                el Pilcomayo, siempre a la par del Bermejo. Y el Gran Chaco quedó sin jefe. Pero siguió prosperando bajo el cuidado de la naturaleza, enmarañado, impenetrable, surcado por el río de aguas rojas nacido en el corazón de Tuvichavé."
                
                />
            </div>
        )
    }
}
