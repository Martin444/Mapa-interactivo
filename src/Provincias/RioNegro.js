import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Rodolfito from '../images/rodolfin.jpeg'
import Amancay from '../images/amancay.jpg'


export default class RioNegro extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Rodolfito} imgLeg={Amancay}
                mit="El fantasma de Rodolfito"
                mito="Según cuentan los vecinos, el más conocido es el fantasma de Rodolfito. Era un muchacho bueno, un verdadero personaje del pueblo, muy allegado a la Asociación de Padres y Amigos de las Personas con Discapacidad. Era común verlo caminar las calles del pueblo con toda su bonhomía e inocencia a cuestas.

                Lo cierto es que una vez enfermó gravemente y falleció. Por razones que se ignoran sin poder ser velado su cuerpo fue llevado directamente el cementerio local.
                
                 Dicen que por esa aciaga circunstancia que su fantasma anda errante y algunos aseguran que lo cruzan cuando salen a caminar o que lo ven andando en bicicleta. Y la anécdota más difundida es que a veces el Rodolfito viaja en taxi, solo o siendo un pasajero más."
                legend="Leyenda del Amancay"
                leyenda="En la orilla derecha del río Manso y hasta su nacimiento en el valle del Lolol Mahuida (cerro Tronador), vivían los indios vuriloches.

                Quintral, hijo del cacique de la tribu, era un muchacho apuesto y valiente, que acostumbraba recorrer la orilla del río, cazando y pescando, hasta llegar a Co-carí (lago Mascardí). Fue en uno de esos paseos donde conoció a una hermosa muchacha india llamada Amancay.
                
                Al verse, ambos se enamoraron de inmediato. Pero aquél fue un amor imposible por ser Amancay de origen humilde. Pasó el tiempo, hasta que un día se desató una epidemia que comenzó a diezmar la tribu. Y Quintral cayó enfermo. Todos los esfuerzos de los brujos por mejorarlo fueron inútiles. Enterada Amancay, consultó a una machi (hechicera), quien le confió el secreto para obtener el remedio. Tenía que preparar una infusión con una flor que crecía en la cumbre helada del Lolol Mahuida. Amancay no dudó un instante y se puso en camino, a pesar de las advertencias de la machi sobre el peligro que corría su vida. El amor que sentía por Quintral parecía darle una misteriosa fuerza. La muchacha llegó a la cima del cerro y encontró la flor. Y feliz por haber logrado su cometido, comenzó el descenso. Pero al pie de una hermosa cascada vio cernirse sobre ella la amenazante figura del cóndor, que le exigió que abandonara la preciada flor. Como Amancay se negó, el cóndor le propuso que le dejara en cambio su corazón. La indiecita, pensando sólo en su amado, aceptó sin titubear. Y fue así corno el rey de las cumbres emprendió el vuelo hacia su morada, con el pequeño corazón entre sus garras. A su paso, gotas rojas teñían el camino. -Y allí mismo donde éstas caían, florecía una preciosa flor, de varios pétalos, corno un mensaje de amor pregonado por todos los valles y montañas del Co-carí y Nahuel Huapí."
                />
            </div>
        )
    }
}
