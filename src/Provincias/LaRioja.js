import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Mikilo from '../images/mikilo.jpg'
import Chaya from '../images/Chaya.jpg'
import Riojana from '../music/Carnaval En La Rioja.mp3'
import PlayerAudio from '../Components/PlayerAudio';


export default class LaRioja extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Mikilo} imgLeg={Chaya}
                mit="El Mikilo"
                mito="El duende que muchos riojanos dicen haber visto deambular por las calles de la localidad de Chilecito se llama “Mikilo”, asusta desde la época de los diaguitas a los niños picarones que se escapan de sus casas a la hora de la siesta, y, dicen, es un tramposo. 

                Hombrecillo de poncho y sombrero negro llevar, este pequeño ser fue denunciado a la policía riojana por los apacibles habitantes de la también apacible Chilecito por andar posándose en las entradas de las casas de los lugareños y asustar a los paseantes. 
                
                Mikilo suele engañar con su particular confección física a las distraídas víctimas. Es que posee una mano de lana y la otra de hierro y ante la pregunta –que no da lugar a un no- sobre con cuál mano el ocasional atormentado quiere recibir un golpe, Mikilo se abusa.
                
                Si le responden que con la de lana, pues bien, recibe un golpe durísimo; en tanto que si la víctima se decide por la de hierro, cosa que nunca sucede, obtiene un menor sacudón. 
                
                Sin embargo hay quienes dicen que no existe, que su presencia no es cierta, que, en fin, es sólo producto de la fantasía pueblerina, aunque logre generalmente el cometido para el que se lo invoca: que los más pequeños se decidan por dormir la siesta"
                legend="Chaya Riojana y su Pujllay"
                leyenda='“La Chaya” una variante del carnaval para algunos, el origen del carnaval para otros, le semblanza a nuestra querida “Pachamama” y el agradecimiento por los frutos cosechados de ella. Se trata de una cultura muy arraigada en nuestro pueblo que viene desde siglos heredada de las raíces incas y diaguitas que habitaron esta zona en antaño.
                Cuenta la historia, que nuestros antepasados cuando llegaba febrero, para ellos el mes de la cosecha, danzaban y se embriagaban sacando de muy dentro de ellos aquello que estuvo contenido en todo el año, en aquel momento se transformaban en otras personas y vestían ropas especiales, se animaban a hacer cosas nunca hechas y disfrutaban plenamente de los frutos cosechados de la tierra (“Pachamama”) Madre Tierra.
                
                Cuenta la leyenda que Chaya era una muy bella jovencita india, que se enamoró perdidamente del Pujllay, joven alegre, pícaro y mujeriego que ignoro los requerimientos amorosos de la hermosa indiecita. Fue así como aquella, al no ser debidamente correspondida, se interno en el monte a llorar sus penas y desventuras amorosas, desapareciendo en el para, desde entonces, solo retornar anualmente, hacia el mediado del verano, del brazo de la Diosa Luna (Quilla), en forma de rocío o fina lluvia. En tanto Pujllay sabiéndose culpable de la desaparición de la joven india, sintió remordimiento y procedió a buscarla por todo el monte infructuosamente. Tiempo después, enterado el joven del regreso de la joven a la tribu con la luna de febrero, volvió el también al lugar para continuar la búsqueda pero fue inútil. Allí, la gente que festejaba la anhelada cosecha, lo recibía con muecas de alegría; el por su parte, entre la algarabía de los circunstantes, prosiguió la búsqueda y la indagación con profunda desesperación y resultado totalmente negativo. Por ello, derrotado, termino ahogando en chicha su soledad y su pasada fama de Don Juan hasta que luego, ya muy ebrio, cae en un fogon y muere quemado, desde entonces que "Chaya" viene en Febrero año a año a apagar el fuego de "Pujllay". 
                
                Desde entonces y para siempre, se festeja la chaya, cada año aparece el pujllay y muere al terminar el festejo y se lo entierra hasta el año que viene. '
                />
                <h5>Música</h5>
                <PlayerAudio
                src={Riojana}
                song='Carnaval en la Rioja'
                artist='Chaqueño Palavecino'
                />
            </div>
        )
    }
}
