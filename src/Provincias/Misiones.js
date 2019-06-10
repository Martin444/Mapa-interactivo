import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Yasi from '../images/Yasi.jpg'
import Cataratas from '../images/Cataratas.jpg'
import Yerba from '../images/yerba.jpg'

export default class Misiones extends Component {
    render() {
        return (
            <div>
                <h5>Mitos</h5>
                <Accordion>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff", cursor:"pointer"}}>YASI YATERE</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Yasi} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                        <p className="font-weight-normal">
                        Muchas de las características de este personaje se confunden con las del Pombero. El Yasy Yateré suele ser representado como un enano o un niño pequeño, desnudo, hermoso, de cabellos dorados, (en algunas variantes barbudo), con un sombrero de paja y un bastón de oro donde residen sus poderes mágicos 
 Suele recorrer el monte a la hora de la siesta, atrayendo a los niños con un silbido hipnótico que imita al de un ave. Se dice que aparece sobre todo durante la época del avatiky (cosecha del choclo o maíz tierno) que gusta comer. 
 El Yasy Yateré se vale de su silbido o de su bastón mágico para atraer a los niños, a los que rapta. Los lleva al monte donde los retiene un tiempo para jugar con ellos y alimentarlos con miel y frutas. Luego los abandona o los deja enredados en ysypo (liana).
 Antes de abandonarlos, el Yasy Yateré los lame o los besa, dejándolos tontos o idiotas (tavy: akã tavy), mudos (ñe engu) o sordomudos. Sin embargo, éstos se recuperan después de un cierto tiempo. En algunas zonas se cree que al cumplirse un año del rapto, el niño tiene un "ataque" con convulsiones (epilepsia).
 En otras versiones, si el Yasy Yateré se cansa del niño, puede llevarlo al río donde lo ahoga 
 Una forma de volver inofensivo a este personaje es quitándole su bastón dorado, sin el cual se carece de poderes. Entonces el Yasy se pone a llorar como un niño pequeño. Para conseguir esto, basta con embriagarlo con caña (aguardiente), bebida a la que es muy aficionado.
 Otra forma de congraciarse con él es ofreciéndole pencas de tabaco, que se dejan en zonas aledañas a la casa o bien en los caminos de entrada al monte.
 En la versión de Rosicrán de la mitología guaraní, Yasy Yateré es el cuarto hijo de Taú (espíritu del mal) y de Keraná (diosa del sueño).
 Este mito es usado por las madres, sobre todo en áreas rurales, para evitar que los niños se alejen de sus casas a la hora de la siesta (obligada en estos sitios por las elevadas temperaturas).
 "Yasy-Yateré el que se oye pero no se ve" ese conocido dicho se refiere a que el Yasy es invisible para todos excepto los niños muy pequeños, y se oye por el ruido con que los atrae.
 También se dice que el Yasy tiene los pies al revés, asi alguien al ver sus pisadas cree que era una persona que se estaba yendo, y no el Yasy que estaba llegando al pueblo.
                        </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <h5>Leyendas</h5>
            <Accordion>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff", cursor:"pointer"}}>
                            Cataratas del Iguazú
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Cataratas} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        Cuenta la leyenda que hace muchos años, habitaba el río Iguazú, una enorme y monstruosa serpiente cuyo nombre era Boi. Los indígenas guaraníes debían una vez por año sacrificar una bella doncella y entregársela a Boi, arrojándola al río.
 Para esta ceremonia se invitaba a todas las tribus guaraníes, aún a las que vivían más alejadas. Fue así que un año llego al frente de su tribu, un joven cacique cuyo nombre era Tarobá; el cual al conocer a la bella doncella india, que ese año estaba consagrada al sacrificio y cuyo nombre era Naipí, se reveló contra los ancianos de la tribu y en vano intentó convencerlos que no sacrificaran a Naipí.Para salvarla sólo pensó en raptarla y la noche anterior al sacrificio cargó a Naipí en su canoa e intentó escapar por el río.Pero Boi que se había enterado de esto, se puso furiosa y su furia fue tal que encorvando su lomo partió el curso del río formando las cataratas, atrapó a Tarobá y a Naipí.
 A él lo transformo en los árboles que hoy podemos ver en la parte superior de las cataratas y a la cabellera de la bella Naipí en la caída de las mismas.
 Luego se sumergió en la Garganta del Diablo, y desde ahí vigila que los amantes no vuelvan a unirse ... pero, sin embargo, en días de pleno sol, el arco iris supera el poder de Boi y los une......
                        </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff", cursor:"pointer"}}>
                        La leyenda de la yerba y la luna
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Yerba} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        Esta leyenda comenzó el 17 de abril del 2000 en Santiago del Estero, cuando dos policías de la localidad de Frías dijeron ver en la plazoleta Antonio De La Vega una criatura petisa, con un aspecto similar a un niño.
                        </p>
                        <p>El caso llegó a la televisión, donde los agentes contaron que, de repente, se le iluminaron los ojos a este personaje y luego desapareció. Poco tiempo después otro efectivo policial denunció un hecho similar en la Banda Varela, Catamarca.</p>
                        <p>En este último registro, el duende dijo que era un enviado de Satanás. La leyenda aún perdura, aunque las pruebas son poco claras.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        )
    }
}
