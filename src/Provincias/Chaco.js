import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Lobizon from '../images/lobizon.jpg'
import Pilcomayo from '../images/pilcomayo.jpg'
import Timbo from '../images/timbo.jpg'

export default class Chaco extends Component {
    render() {
        return (
            <div>
                     <h5>Mitos</h5>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>El Lobizón</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Lobizon} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                El lobizon vendría a ser uno de los mitos mas conocido en todo el mundo. Ya que esta inspirado en “el hombre lobo”.
                Según se cuenta, es un hombre común y corriente que en las noches de luna llena, se convierte en mitad-lobo y come el ganado de los campesinos.
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
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>Leyenda del origen de los rios Bermejo y Pilcomayo</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Pilcomayo} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                Dice la leyenda que, después de la creación, Tupá (Dios) confió a Guarán la administración del Gran Chaco, que se extendía más allá de la selva. Y Guarán comenzó la gran tarea. Cuidó de la fauna y la flora, de la tierra y de los montes. Y también gobernó sabiamente a su pueblo, logrando una verdadera civilización Guarán tuvo dos hijos: Tuvichavé, el mayor, que era impetuoso y decidido; y Michiveva, el menor más reposado y pacífico.

                                Y Guarán, antes de morir, entregó a ellos la administración del Gran Chaco Fue entonces cuando comenzaron las pelear, entre los dos hermanos Ambos tenían opiniones diferentes respecto de cómo manejar los asuntos de la región

                                Un día apareció Aña (genio del mal) quien leo aconsejó que compitieran entre sí con destreza para resolver las cuestiones que los enfrentaban. Tuvichavé y Michiveva, cegados por sus diferencias. decidieron hacerle caso. Subieron a los cerros que lindaban con el Gran Chaco y, para disputar su hegemonía sobre el territorio, acordaron realizar diversas pruebas habilidad como manejo de las flechas y resistencia física. En una de esas pruebas, Michiveva lanzó una flecha contra un árbol que ser-vía de blanco. Pero Añá hizo de las suyas: la desvió, y la flecha fue a dar en el corazón de Tuvichavé. Al instante, la sangre brotó con fuerza y comenzó a correr y a bajar por los cerros llegó hasta el Chaco, se internó en Su territorio y formó un río de color rojo: el (Bermejo Al darse cuenta de lo que había hecho, Michiveya lloró.

                                ---Y lloró tanto, que sus lágrimas corrieron tras el río de sangre de su hermano Así se formó

                                el Pilcomayo, siempre a la par del Bermejo. Y el Gran Chaco quedó sin jefe. Pero siguió prosperando bajo el cuidado de la naturaleza, enmarañado, impenetrable, surcado por el río de aguas rojas nacido en el corazón de Tuvichavé.
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>LEYENDA DEL TIMBÓ</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Timbo} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                En la vasta llanura chaqueña la vida era fatigosa y dura durante los meses de verano. 
                                </p>
                                <p>
                                Atravesando grandes distancias, a pie o a caballo, se encontraban algunos modestos caseríos visitados de vez en cuando por algún ciego y su lazarillo. 
                                </p>
                                <p>
                                La llegada del ciego con estampas y baratijas y algunos libros de viajes o vida de santos, era siempre un acontecimiento; y al modo de los juglares, el viajero encontraba hospitalidad y afecto en los abnegados pobladores del Chaco legendario.
                                </p>
                                <p>
                                Un día Timbó, anciano ciego, atravesaba el campo chaqueño con la ayuda de su lazarillo. 
                                </p>
                                <p>
                                La saca enorme contenía los alimentos para el viaje y los libritos para la venta. La mano apoyada sobre el hombro de su lazarillo se hacía cada vez más pesada; y los ojos sin luz sentían, a pesar de las sombras eternas las fuerzas de las brillazones que castigaba la mirada dulce del lazarillo, a quien Timbó amaba como a un hijo. 
                                </p>
                                <p>
                                Iban atravesando una cañada. Era a la siesta. El niño miró hacia el cielo y vio a los pajaritos volar libremente; miró hacia el bosque... y la agreste selva parecía entonar allá lejos, con la música del ramaje verde, himnos de libertad para invitarlo a disfrutar de un derecho común.
                                </p>
                                <p>
                                Él, siempre había tenido que vivir sujeto a Timbó, el amigo que lo trataba bien, pero cuya mano temblorosa siempre sostenía sobre el hombro como un peso que lo esclavizaba. No había tenido amigos de su edad. 
                                </p>
                                <p>
                                Estas reflexiones hechas a campo traviesa, dieron al lazarillo una fuerza extraña..., tan extraña, que sin saber cómo, separó bruscamente la mano de Timbó y echó a correr en aras de la libertad. El ciego no pudo comprender lo que pasaba. Llamó al niño una y otra vez. Lo esperó confiado porque lo amaba y creía en su lealtad. Sus ojos en eterna noche no pudieron contar las noches y los días; pero él esperaba... esperaba... echando el oído en tierra con la esperanza de escuchar sus pasos. 
                                </p>
                                <p>
                                El viento de la cañada se mostró implacable; la lluvia le caló los huesos, y un frío de muerte recorrió el cuerpo del anciano. De pronto creyó escuchar unos pasos; una tibieza amorosa recorrió su cuerpo, y derramando cálidas lagrimitas, se sintió transportado a una región muy hermosa. El corazón no le latía más. 
                                </p>
                                <p>
                                Llegó la primavera. En aquel mismo lugar creció una plantita, primero tímida y temblorosa como la mano de un anciano que se tiende pidiendo caridad, después fuerte y vigorosa, como un corazón noble que confía y espera. 
                                </p>
                                <p>
                                Pronto fue esa planta más alta que la selva vecina. Tenía prisa por crecer y ya en lo alto se cubrió de flores, pequeñas como lágrimas, para mirar a la distancia. Quería ver... después multiplicó sus orejas y agachando las ramas hacia la tierra pareciera que todavía confiara escuchar los pasos del ausente. 
                                </p>
                                <p>
                                Esta es la leyenda del timbó, un árbol de la región, cuyo fruto, llamado vulgarmente “oreja de negro” cae al suelo siempre del mismo lado como una oreja en actitud de escuchar. 
                                </p>
                                <p>
                                Y dicen las gentes del campo, que los que viven en ranchos a la sombra de algún timbó jamás se traicionan porque el timbó es símbolo de lealtad. 
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
            </div>
        )
    }
}
