import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Pericana from '../images/pericana.jpg'
import Futre from '../images/futre.jpg'


export default class Mendoza extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgLeg={Futre} imgMit={Pericana}
                mit="La Pericana"
                mito="Es un personaje mas difundido en San Juan, algunos dicen que es una vieja muy horrible, flaca gigantesca y de largos dientes, que sale por la siesta para correr y a pegar con un chicote (especie de latigo) a los niños que se encuentran a esa hora fuera de sus casas sin permiso de sus padres o haciendo picardias. "
                legend="El Futre"
                leyenda="Contada por el Ingeniero Fidel Roig, se trataria de un ingles bien vestido (y de ahi su nombre, porque se le llamaba futre a las personas vestidas elegantemente) que, tras haber perdido todo en la sala de juego del hotel de esa localidad, salio vestido de frac en plena noche y se perdio entre los cerros nevados, sin que se tuviera mas noticias de él, salvo las operaciones fantasmales que sucedieron despues de su desaparicion, dicen que se lo ve cabizbajo y con mucha pena"
                />
            </div>
        )
    }
}
