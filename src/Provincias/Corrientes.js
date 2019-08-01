import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Karai from '../images/Karai.png'
import Gauchito from '../images/Gauchito.jpg'
import Lapacho from '../images/lapacho.jpg'
import MiCorrientes from '../music/Mi Corrientes Porá.mp3'
import PlayerAudio from '../Components/PlayerAudio';

export default class Corrientes extends Component {
    render() {
        return (
            <div>
                <h5>Mitos</h5>
                <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>Karaí Octubre</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Karai} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                Este hombre que ahora trenza su látigo de ysypo resguardado en las anchas alas de su raído sombrero de paja vive solo en el monte. Nadie lo ve sino una sola vez al año. Aparece para comprobar que se cumpla la tradición de siempre el primer día de octubre. Viene preparado, con su rebenque listo para castigar a quienes se atrevan a desafiar la costumbre.
                Le interesa sobremanera la cocina de cada casa. Pasa hasta donde las ollas están hirviendo sin importarle nada más. Lo ha hecho durante siglos. ¿Quién podría cuestionar su actitud?
                Malhumorado y hombre de pocas pulgas el Karai se pasea por los poblados haciendo sonar su látigo para anunciar su llegada. Las mayoría de las mujeres le ceden el paso y le dejan espiar en las ollas. Pero aquellas que no han seguido la tradición, pretenden ahuyentarlo, temerosas. Esas no se salvan del castigo.
                
                Karaí Octubre le llaman. Medio petisón es el hombre y su ancho sombrero lo achata aún más. Lleva puestas unas ropas roñosas y, como ya dijimos, hace sonar su rebenque antes de entrar a espiar en las cocinas y en las ollas.
                Karaí Octubre es la pobreza, la miseria, las penurias. Se le ahuyenta solamente con una olla repleta de comida. Si no encuentra suficiente, se queda con esa familia para todo el año y, además de los rebencazos, la miseria les acompañará por todo el año, con sus nefastas consecuencias.
                
                De ahí que en todas las casas, cada primero de octubre, no falte el puchero bien servido. De esa forma la conciencia de toda la familia quedará tranquila por el resto del año. En cambio aquellos que se resistan y mezquinen la comida de ese día tendrán que convivir con el hambre por el resto del año. Esta tradición enseña al campesino a prever el alimento para los suyos durante los meses de “vacas flacas”, época que se inicia en octubre y que abarca los últimos meses del año 
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                <h5>Leyenda</h5>
                <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>Gaucho Antonio Gil</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Gauchito} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                Cuenta la leyenda que el Gauchito Gil, Antonio Gil Nuñez, nació en la provincia de Corrientes, en la zona de Pay Ubre (actualmente Mercedes), aproximadamente en el año 1847.
                Su historia y los relatos más antiguos de la misma se desarrollan a partir de su juventud, cuando dicen que se enamoró de una joven viuda que era pretendida por el comisario del pueblo. El policía, despechado porque la viuda lo rechazaba, comenzó a perseguir a Antonio Gil aprovechándose del poder de su autoridad, hasta que finalmente se enfrentaron en una pulpería. En la pelea el Gauchito Gil le perdonó la vida. Sin embargo, este episodio en lugar de beneficiarlo fue aprovechado por el policía para perseguirlo por atentar contra la autoridad y Antonio Gil debió huir del pueblo.
                Por estos años, el país se encontraba en guerra con el Paraguay, y como tantos otros, Gil se alistó bajo las órdenes del General Madariaga. Durante cinco años participó de la Guerra de la Triple Alianza, que culminó bajo la presidencia de Sarmiento en 1870 cuando las fuerzas brasileñas capturaron y mataron al gobernante paraguayo, Mariscal Francisco Solano López.
                Terminada la guerra, Antonio Gil fue convocado por el ejército federal para luchar contra los unitarios, pero como no estaba de acuerdo con los enfrentamientos internos del país, decidió huir junto a dos compañeros. Así comenzaron una vida errante huyendo permanentemente de la autoridad, y viviendo del ganado robado que compartían con los campesinos más necesitados. Casi un año después, una partida militar lo encontró dormido bajo la sombra de unos espinillos y lo llevó detenido a Goya. Pero apenas habían comenzado la marcha, los soldados lo tiraron al suelo, le ataron los pies con una soga larga y lo colgaron de un algarrobo cabeza abajo. Dirigiéndose al que lo iba a matar, el Gauchito pronunció sus últimas palabras: “Cuando vuelvas a tu casa, encontrarás a tu hijo muy enfermo pero si mi sangre llega a Dios, juro que volveré en favores para mi pueblo”.
                Acto seguido, obedeciendo la voz de mando, el soldado le cortó el cuello.
                Varios días después, cuando todos ya habían olvidado al Gauchito, el soldado que lo había matado volvió a su casa, y se encontró con su esposa desesperada porque su único hijo estaba muy enfermo. En ese instante recordó las palabras de Gil. Entonces volvió al lugar donde lo habían matado, enterró el cuerpo y le rogó al Gauchito por su hijo. Cuando volvió a su casa al amanecer encontró a su niño sano…
                Cada 8 de enero, una enorme cantidad de creyentes de todas partes del país y también de países vecinos, se acercan hasta el santuario a pocos kilómetros de Mercedes, parada obligada de todos los viajeros, que se encomiendan a él, en sus viajes, y allí se arma una de las fiestas religiosas paganas más populares y concurridas de la provincia, sin comparar por supuesto con la multitudinaria manifestación de fe a la Virgen de Itatí. Las velas y cintas de color rojo, abundan por todos lados, y el museo del Gauchito, es una acabada muestra de todo lo que la gente es capaz de dar y ofrendar en agradecimiento por sus favores.
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>LEYENDA DEL LAPACHO</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Lapacho} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                - Cuenta la historia, que Dios estaba preparando el mundo, se reunió una tarde con todos los árboles y pidió que cada árbol eligiera la época en la que cada uno de ellos quisiera florecer y así, embellecer la tierra.
                                </p>
                                <p>
                                ¡Y en un estallido de alegría comenzaron todos a gritar: “otoño, verano, primavera, decían !!!”
                                        Pero Dios observó que ninguno elegía la estación de invierno.
                                </p>
                                <p>
                                Entonces Dios preguntó:
                                </p>
                                <p>
                                - ¿Por qué nadie elige la época de invierno?
                                    Cada uno tenía su razón. ¡Muy seco! ¡muy frío! ... muchos incendios!
                                    Entonces Dios pide un favor...
                                    Necesito al menos un árbol, que embelese el invierno, que sea valiente y capaz de enfrentar el frío, la sequía y las quemas y en ese frío poder embellecer el mundo...
                                    Se quedaron todos en silencio.
                                </p>
                                <p>
                                Fue entonces que un árbol callado y tranquilo al fondo, sacude sus hojas y dijo:
                                -¡Yo voy!...
                                Y Dios con una sonrisa preguntó:
                                - ¿Cuál es tu nombre?
                                ¡Me llamo ""Lapacho, señor!
                                Los otros árboles, quedan espantados del coraje del Lapacho y su locura de querer florecer en invierno.
                                </p>
                                <p>
                                Entonces Dios respondió:
                                </p>
                                <p>
                                - Por atender mi pedido te haré florecer en el invierno no sólo con un color, sino con varios...
                                    Para que también en invierno, el mundo sea colorido.
                                    Como agradecimiento le dijo: tendrás diferentes colores y texturas y tu linaje será enorme.
                                    Y así Dios hizo uno de los más hermosos árboles que da color al invierno. Y así tenemos al Lapacho:
                                    blanco,
                                    amarillo,
                                    Amarillo del pantano,
                                    Amarillo de la hoja lisa,
                                    Amarillo niebla,
                                    rosa,
                                    púrpura,
                                    Morado.
                                </p>
                                <p>
                                ¡Qué podamos ser como el Lapacho, y sepamos florecer en los inviernos de la vida!
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <h5>Música</h5>
                    <PlayerAudio
                    src={MiCorrientes}
                    song='Mi Corrientes Porá'
                    artist='Mi Corrientes Porá'
                    />
            </div>
        )
    }
}
