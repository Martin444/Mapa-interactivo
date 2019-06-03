import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Madre from '../images/madre.jpg'
import Difunta from '../images/difunta.jpg'


export default class SanJuan extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Madre} imgLeg={Difunta}
                mit="La madre del Agua"
                mito="Es un bicho (según cuentan los lugareños entendidos en estos saberes esotéricos) de no más de tres a cinco centímetros de largo y dos o dos y medio de ancho, tiene seis largas patas, más o menos y las apariencia de una araña flaca con cruza de cien pies (en realidad es un grillo de agua; vive en las acequias , canales arroyos o desagües entre las raíces acuáticas de las totoras, juncos y cañaverales; cuando se aburre de su húmedo lar, sale a tierra, o mejor dicho se mete en ella y con sus patas de serrucho va abriendo en la arena bien sobre la línea de agua unos largos surcos, a veces del largor de una cuadra o más, por esta habilidad de arar en la arena también la llaman el arador cambiándole el sexo, pero eso, lo dicen los ignorantes, o gentecilla de poco caletre."
                legend="La leyenda de la difunta Correa"
                leyenda='Fue tras su marido

                En el transcurso del año 1835 un criollo de apellido Bustos fue reclutado para las montoneras de Facundo Quiroga y llevado por la fuerza a La Rioja. Su mujer, María Antonia Deolinda Correa, desesperada porque su esposo iba enfermo, tomó a su hijo y siguió las huellas de la montonera. 
                
                La encontraron muerta
                Luego de mucho andar -cuenta la leyenda- y cuando estaba al borde de sus fuerzas, sedienta y agotada, se dejó caer en la cima de un pequeño cerro. Unos arrieros que pasaron luego por la zona, al ver animales de carroña que revoloteaban se acercaron al cerro y encontraron a la madre muerta y al niño aún con vida, amamantándose de sus pechos. Recogieron al niño, y dieron sepultura a la madre en las proximidades del Cementerio Vallecito, en la cuesta de la sierra Pie de Palo.
                   
                
                
                Comienzan los milagros
                Al conocerse la historia, comenzó la peregrinación de lugareños hasta la tumba de la "Difunta Correa". Con el tiempo se levantó un oratorio en el que la gente acercaba ofrendas.
                
                La difusión de sus milagros ya tradicionales se ha extendido por todo San Juan. La leyenda de la Difunta Correa es uno de los casos más interesantes de creencias populares, porque constituye un mito ancestral indígena que no pudo ser reinterpretado por la Iglesia Católica debido a que no existe ningún mito equivalente en la cultura occidental cristiana para que pueda ser remodelado. Esto se debe a que la estructura del mito es la sobrevivencia de un niño que mama los pechos de la muerta. Mamar de un cadáver, es decir tomar vida de la muerte, no existe como estructura en la mitología occidental cristiana.'
                />
            </div>
        )
    }
}
