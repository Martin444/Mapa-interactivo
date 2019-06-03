import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Ucumar from '../images/ucumar.jpg'
import Incas from '../images/incas.jpg'

export default class Salta extends Component {
    render() {
        return (
            <div>
                <SingleLegend mit="El Ucumar" imgMit={Ucumar}
                mito="El ucumar es un hombre oso que vive en los lugares muy escondidos de las quebradas, en las cuevas de las peñas, en medio de los montes y cerros altísimos.

                Su madre, una joven cazadora, se extravió en la selva y fué atrapada por un oso, dando así orígen a la raza de los ucumares.
                
                Es petiso, panzón y su cuerpo esta completamente cubierto de pelos largos y negros. Tiene barba y los cabellos le cubren la cara de rasgos humanos.Sus piernas son comolas de un oso y los pies poseen, a diferencia de los nuestros, el dedo grande muy abierto. Sus huellas han sido encontradas cerca de las vertientes donde va a tomar agua.Los ojos son pequeños pero muy vivaces y de mirada intensa. Es un ser con una fuerza extraordinaria.Pueden oirse sus gritos cuando el viento es favorable.
                
                La gente lo teme pués roba a las mujeres y las lleva a vivir con el. El ucumar hembra rapta hombres jovenes para formar pareja.
                
                Es frecuente que las mujeres secuestradas regresen a sus hogares después de algunos años. Los relatos de las sobrevivientes coinciden: todas afirman que vivían en una cueva, la cual el hombre-oso cerraba con una gran piedra. Cuando los hijos crecen, heredan la fuerza del padre y pueden correr la piedra, librándose y ayudando a escapar a sus madres de la prisión.
                
                Existen versiones de que no sería un animal, sinó el alma de un hombre rico condenado por mezquino y malvado. Bajo el aspecto de ucumar, echando fuego por los ojos, ataca a la gente para matarla y comerse el corazón; pero es probable que estos datos sean rasgos exagerados provocados por el temor que infunde. De hecho, muchos cuentan que es generoso con aquellos a quienes atrapa, los cuida y los alimenta con miel y frutas silvestres."
                imgLeg={Incas}
                legend="La leyenda de los Inkas" 
                leyenda="          Cierta vez, en una isla del lago Titicaca, apareció una pareja divina hijos del Sol, a quienes éste les confió la misión de enseñar a los hombres  principios de civilización,  verdad y justicia.

Para ello les entregó una vara de oro, mandándoles que se estableciesen allí donde la vara desapareciera al hundirla en el suelo.



Partieron pues Manco Capac y Mama Ocllo en busca de su tierra  prometida, golpeando el suelo cada día con la vara mágica. Se detuvieron un poco Pacaritampu y al fin llegaron junto a la colina de Huanacuari, donde en el primer golpe en el suelo la vara de oro desapareció.

Entonces la divina pareja se estableció allí ; enseñaron a las gentes del lugar a cultivar la tierra, a tejer la fibra y a construir casas ;  las leyes, la guerra y el culto del Sol.

Fundaron, en fin, la ciudad de Cuzco, en cuyo dominio sobre los pueblos vecinos se cimentó el imperio de los incas"/>
            </div>
        )
    }
}
