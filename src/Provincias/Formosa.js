import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Pombero from '../images/pombero.jpg'
import Curuzu from '../images/Curuzu.jpg'

export default class Formosa extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Pombero}
                mit="El Pombero"
                mito="El Pombero es uno de los mitos más extendidos en la zona del Paraguay, sur de Brasil y noroeste de Argentina.
                El pombero es el guardián de la selva, el protector de los pájaros y el duende la siesta. Se lo caracteriza como un ser de estatura elevado, velludo, silencioso y portador de un sombrero de paja. Camina con una caña en su mano, a modo de bastón.
                Este mítico personaje puede silbar imitando el sonido de todas las aves. A cambio de sus favores, se le hacen ofrendas de miel, huevos y tabaco.
                El pombero sin embargo, puede ser vengativo cuando se olvidan de él. 
                Pombero
                Puede robar niños que se pierden en la selva a la hora de la siesta, especialmente si estos se divierten cazando aves. Y también puede hipnotizar a las mujeres para poseerlas, particularmente enamorándose de aquellas que están embazadas de una niña.
                La leyenda agrega además que este ser tiene la capacidad de la metamorfosis, aunque su forma habitual es la de un hombre robusto y velludo, puede adquirir aspecto de camalote, tronco flotante o indígena. Incluso puede volverse invisible y atravesar los ojos de las cerraduras."
                imgLeg={Curuzu}
                legend="Curuzu la novia"
                leyenda="Cuenta la historia que por aquellos años, esta isla y la zona que hoy ocupa el camping, estaban habitadas por gran cantidad de familias de isleños y colonos que se dedicaban a la agricultura y a la cría de animales de granja y cuya producción se comercializaba casi en su totalidad en la ciudad de Formosa, teniendo como único medio de comunicación y transporte entre las dos orillas la canoa a remo.
                Se dice que en esta isla vivían, entre otros pobladores, una pareja de enamorados que, por contar con escasos recursos económicos, no se decidían a casarse.       
                Curuzú La Novia
                Los padres de la novia presionaban permanentemente a la pareja para intentar apresurar el casamiento, pues ya no admitían tantos años de noviazgo improductivo, y al final, cansados ya de las innumerables indirectas y presiones a las que eran sometidos día y noche, los jóvenes deciden, no muy convencidos, contraer enlace y legalizar esa relación que se venía arrastrando desde hacía varios años atrás.
                La noticia corrió rápidamente en la isla como una novedad que sorprendió y agradó a todos, pues la pareja era muy apreciada entre los vecinos.
                Así, se fijó la fecha para la boda y de esta forma, la pareja, los testigos y algunos acompañantes prepararon todo para trasladarse en canoa hasta la delegación del Registro Civil de Formosa y concretar el enlace. Terminada la ceremonia civil y religiosa, la comitiva emprendió el regreso para festejar el feliz acontecimiento con una gran fiesta preparada con la colaboración de todos los habitantes de la isla que esperaban ansiosos la llegada de la pareja.
                Pero el destino les tenía preparada una mala jugada: a poco de arribar a la costa de la laguna el clima comenzó a cambiar, aparecieron en el cielo negros nubarrones y la lluvia y la tormenta amenazaban con azotar el lugar.
                Así, se apresuraron por abordar la canoa que los había traído queriendo cruzar cuanto antes a la isla pero la tormenta implacable ya estaba sobre ellos, el agua de la laguna comenzó a picarse con el viento que arreciaba cada vez más fuerte formando sobre su superficie amenazantes olas espumosas, sorprendiendo a la desafortunada pareja y a sus acompañantes en pleno cruce hacia la isla, provocando el hundimiento de la canoa.
                Algunos pudieron salvarse nadando hasta la costa, pero la flamante pareja de recién casados no tuvo la misma suerte y desapareció bajo la superficie de las aguas para nunca más ser encontrados, pese a haber realizado incansables búsquedas durante varios días y noches.
                Los padres de la novia lloraron durante mucho tiempo la irremediable pérdida creyéndose culpables de lo ocurrido debido a la presión que le habían impuesto a la pareja, y como es tradición en estos casos en nuestra zona, hicieron erigir en el lugar del hecho una gran cruz de madera en memoria de las dos jóvenes almas.
                A esta cruz que recuerda el triste hecho, y que estuvo en el lugar hasta hace unos años atrás plantada cerca de un casi centenario árbol, se la conoce en Formosa como Curuzú la Novia o Cruz de la Novia"
                
                />
            </div>
        )
    }
}
