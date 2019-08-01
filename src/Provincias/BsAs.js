import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Rivadavía from '../images/rivadavia.jpg'
import Teatro from '../images/teatro.jpg'
import Yaguaron from '../images/yaguaron.jpg'
import PlayerAudio from '../Components/PlayerAudio';
import MiBuenos  from '../music/Mi-Buenos-Aires.mp3'

export default class BsAs extends Component {
    render() {
        return (
            <div>
                <h5>Mitos</h5>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>Los fantasmas del hospital Rivadavía</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Rivadavía} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                El fantasma de la enfermera", la imagen de una mujer regordeta, vestida con el delantal y la cofia típicos del uniforme de otra época, que se corporizó en diversas ocasiones. En el museo hay una antigua foto del personaje que dio origen al mito. Celia cuenta que años atrás, en el área de Genética, una estudiante observaba muy concentrada a través del microscopio cuando, de pronto, sintió una presencia a sus espaldas. Pensó que era un compañero que buscaba hacerle una broma. Al darse vuelta, vio el espíritu. La pasante nunca quiso volver a trabajar.
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
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>Duendes en el teatro Colón</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Teatro} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                Se dice que, entre la amplia gama de duendes, están los que se alimentan de las emociones humanas y de la música…y un lugar como la Opera de Buenos Aires parece bastante idóneo para estar habitado por esta clase de inquilinos…
                Los investigadores van al Teatro Colón, habiendo oído los rumores, y se entrevistaron con uno de los referentes del área de carpintería. Habiéndole preguntado por los sonidos extraños que se oyen tras las funciones, éste los atribuyó al hecho de que la madera tras funciones donde se recalienta (y reacomoda) por la potencia de los focos, se enfría y vuelve a su posición original, generando los sonidos.
                Sin embargo, les presentó a otro empleado, de nombre Avalos, que creía realmente en estos duendes. Avalos contó que, en el 2002 encontraron muerto al jefe de Mayordomía, y las causas de su muerte de debieron a un infarto debido a algo que vió… la leyenda diciendo que fueron duendes. Incluso, contó que hay historias sobre una empleada de limpieza que, habiendose quedado encerrada por accidente en un palco una noche, enloqueció escuchando como le cantaban voces….y terminó renunciando ni bien la encontraron encerrada.
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>Yaguarón: El monstruo del Arroyo</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Yaguaron} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                Cuentan las leyendas acunadas en las riberas nicoleñas que el Yaguarón es un monstruo que vive en las profundidades del arroyo que lleva su nombre y que baña las costas de San Nicolás. Por las noches, a plena luna, se desliza sigilosamente y socava las barrancas provocando desmoronamientos que cobran muchas veces las vidas de hombres y animales. Despedaza a sus víctimas para comerles el pulmón, despreciando el resto. No se lo define con precisión. Es grande, verdoso y de lomo chato. Sus ojos son de lagarto y se destacan los colmillos que los tienen en forma de sable, aunque cortos. Asoma sólo parte de su cuerpo a la superficie y se revuelve en las aguas, alborotándolas”, afirma el antropólogo tucumano Adolfo Colombres en su notable libro “Seres sobrenaturales en la cultura popular argentina”. 
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <h5>Música</h5>
                    <PlayerAudio
                    src={MiBuenos}
                    song='Mi Buenos Aires Querido'
                    artist='Carlos Gardel'
                    />
            </div>
        )
    }
}
