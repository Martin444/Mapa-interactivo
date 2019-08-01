import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Solapa from '../images/solapa.jpg'
import Cardenal from '../images/cardenal.jpg'
import Ceibo from '../images/ceibo.jpg'
import Girasol from '../images/girasol.jpg'
import EnrteS from '../music/Raúl Solari-para-Entre Ríos.mp3'
import PlayerAudio from '../Components/PlayerAudio';


export default class EntreRios extends Component {
    render() {
        return (
            <div>
               <h5>Mitos</h5>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>La Solapa entrerriana</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Solapa} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                La Solapa, muy mentado en las zonas rurales. Se trata de un mito popular que tiene distintas representaciones. Santos Tala en su conocida canción la describe como “Toda vestida de blanco… Con su sombrero grandote”(1). En Nogoyá se lo ha caracterizado como una especie de águila que atrapa y se lleva a los niños que encuentra solos a la hora da la siesta, especialmente en los días de verano.
 En efecto, este duende suele atemorizar a los niños, que amparados en la impunidad de la tradicional siesta entrerriana, particularmente en el verano, salen al campo a hacer de las suyas: cazar pájaros con la honda, pescar o zambullirse en algún arroyo con todos los riesgos que implica, sumado al sol implacable de la primera tarde veraniega. “Gurisito entrerrianito / no andés trotiando a lo iguana …Revisando los niditos”, recomienda Santos Tala. Y seguramente, el mito se crea como una forma de proteger a los gurises de estos incidentes.
 Fabián Gustavo Reato caracteriza a este duende como “una vieja vestida de negro y con una bolsa de leña cargada”.(2) En Santa Fe también se lo encuentra bajo la forma de un duende pequeño, tiene la altura de una bola, y piel de color amarillo intenso.
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
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>La leyenda del cardenal</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Cardenal} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                Hace mucho tiempo, cuando los calchaquíes dominaban el noroeste argentino, Mama Quilla (Luna) envió a su hija Chasca para que ayudara a los hombres y les enseñara a sembrar y aprovechar las hierbas como medicina para sus dolencias.
 Chasca llegó a la tribú del bondadoso Punquillo, quien la recibió con simpatía y agradecimiento y le dio a su propio hijo Ancali como esposo. Ancali ayudó a Chasca a curar enfermos y extraer valiosas medicinas de las plantas de la región, con gran desagrado del Machi (hechicero) de la tribú, que hasta ese momento había ejercido la labor de curandero. Éste, deseoso de venganza, invocó a Zupay (diablo) para envenenar al cacique, y pronto Punquillo cayó enfermo de un misterioso mal que las artes y los conocimientos de Chasca fueron insuficientes para curar.
 Al morir Punquillo, el Machi arengó a la tribú con falsas palabras: 'Chasca y Ancali han causado la muerte de nuestro soberano_ aseguró_ para ascender al trono. Atémoslos en una elevada roca y dejémoslos abandonados'. Así lo hicieron: maniataron a ambos jovenes y los dejaron en un alto peñasco, mientras varios soldados y guerreros les apuntaban con agudas flechas. Chasca, al ver que Ancali recibia en medio de su frente un certero flechazo, unió su cabecita morena a la de él y pronto la sangre de Ancali tiño la cabeza de ambos prometidos. Fue entonces cuando Mama Quilla, compadecida de los jovenes, los convirtió en dos pájaros de pluma gris y cabecita roja, a los que conocemos con el nombre de cardenales
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>La Leyenda de la Flor del Ceibo</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Ceibo} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                Según cuenta la leyenda la flor del ceibo nació cuando Anahí fue condenada a morir en la hoguera, después de un cruento combate entre su tribu y los guaraníes. 
                                </p>
                                <p>
                                Por entre los árboles de la selva nativa corría Anahí. Conocía todos los rincones de la espesura, todos los pájaros que la poblaban, todas las flores. Amaba con pasión aquel suelo silvestre que bañaba las aguas oscuras del río Barroso. Y Anahí cantaba feliz en sus bosques, con una voz dulcísima, en tanto callaban los pájaros para escucharla. Subía al cielo la voz de la indiecita, y el rumor del río que iba a perderse en las islas hasta desembocar en el ancho estuario, la acompañaba.
                                </p>
                                <p>
                                Nadie recordaba entonces que Anahí tenía un rostro poco agraciado, ¡tanta era la belleza de su canto!.
                                </p>
                                <p>
                                Pero un día resonó en la selva un rumor más violento que el del río, más poderoso que el de las cataratas que allá hacia el norte estremecían el aire. Retumbó en la espesura el ruido de las armas y hombres extraños de piel blanca  remontaron las aguas y se internaron en la selva. La tribu de Anahí se defendió contra los invasores. Ella, junto a los suyos, luchó contra el más bravo.
                                </p>
                                <p>
                                Nadie hubiera sospechado tanta fiereza en su cuerpecito moreno, tan pequeño. Vio caer a sus seres queridos y esto le dio fuerzas para seguir luchando, para tratar de impedir que aquellos extranjeros se adueñaran de su selva, de sus pájaros, de su río.
                                </p>
                                <p>
                                Un día, en el momento en que Anahí se disponía a volver a su refugio, fue apresada por dos soldados enemigos. Inútiles fueron sus esfuerzos por librarse aunque era ágil.
                                </p>
                                <p>
                                La llevaron al campamento y la ataron a un poste, para impedir que huyera. Pero Anahí, con maña natural, rompió sus ligaduras, y valiéndose de la oscuridad de la noche, logró dar muerte al centinela. Después intentó buscar un escondite entre sus árboles amados, pero no pudo llegar muy lejos. Sus enemigos la persiguieron y la pequeña Anahí volvió a caer en sus manos.
                                </p>
                                <p>
                                La juzgaron con severidad: Anahí, culpable de haber matado a un soldado, debía morir en la hoguera. Y la sentencia se cumplió. La indiecita fue atada a un árbol de anchas hojas y a sus pies apilaron leña, a la que dieron fuego. las llamas subieron rápidamente envolviendo el tronco del árbol y el frágil cuerpo de Anahí, que pareció también una roja llamarada.
                                </p>
                                <p>
                                Ante el asombro de los que contemplaban la escena, Anahí comenzó de pronto a cantar. Era como una invocación a su selva, a su tierra, a la que entregaba su corazón antes de morir. Su voz dulcísima estremeció a la noche, y la luz del nuevo día pareció responder a su llamada.
                                </p>
                                <p>
                                Con los primeros rayos del sol, se apagaron las llamas que envolvían Anahí. Entonces, los rudos soldados que la habían sentenciado quedaron mudos y paralizados. El cuerpo moreno de la indiecita se había transformado en un manojo de flores rojas como las llamas que la  envolvieron, hermosas como no había sido nunca la pequeña, maravillosas como su corazón apasionadamente enamorado de su tierra, adornando el árbol que la había sostenido.
                                </p>
                                <p>
                                Así nació el ceibo, la rara flor encarnada que ilumina los bosques de la mesopotamia argentina. La flor del ceibo que encarna el alma pura y altiva de una raza que ya no existe.
                                </p>
                                <p>
                                Fue declarada Flor Nacional Argentina, por el 2 de diciembre de 1942. Su color rojo escarlata es el símbolo de la fecundidad en este país.
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card style={{background: "#FF695E", color:"#fff"}}>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>Leyenda del Girasol</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                <img src={Girasol} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                                <p className="font-weight-normal">
                                A orillas del río Paraná vivía una tribu cuyo cacique era Pirayú, algo más alejada habitaba otra tribu amiga cuyo cacique era Mandió. Estos caciques eran grandes amigos y por lo mismo las tribus intercambiaban alimentos, artesanías e incluso compartían expediciones de caza.
                                </p>
                                <p>
                                Cuenta la leyenda que todo hubiese seguido bien; y nosotros quizás nunca hubiésemos conocido a estas tribus; de no ser por el deseo de Mandió de unir a las tribus tomando como esposa a la bella hija de su amigo Pirayú.  Con pena Pirayú le confesó que le resultaba imposible satisfacer ese deseo puesto que Carandaí, la jovencita, desde muy pequeña había ofrecido su vida al dios Sol y por lo tanto no se casaría con ningún hombre. Mandió insistió una y otra vez sin querer entender razones por mucho que su amigo intentó explicarle. Furioso y jurando venganza regresó a sus tierras.
                                </p>
                                <p>
                                Pasó el tiempo y Pirayú confió en que pronto se le pasaría el enojo a su amigo, ¡se equivocó! Una tarde en que Carandaí, como casi cada día, estaba  sentada en su bote en medio del río mirando al sol ponerse, un extraño crepitar la hizo desviar la vista. Con horror vio resplandores de fuego que surgían de la aldea. Remó con todas sus fuerzas temiendo lo peor, más cuando llego a la orilla y quiso desembarcar se vio atrapada en unos gruesos madreros. Delante de ella Mandió, burlón y altanero, le dijo que pidiese a su dios tan amado que la salvara si no quería que él se la llevara. Carandaí alzó la mirada empapada en lágrimas, suplicando a Cuarahjí, su amado dios sol que salvara a su pueblo.
                                </p>
                                <p>
                                Para espanto de Mandió y sus guerreros del sol mismo surgió un feroz remolino de rayos que envolvieron a Carandaí haciéndola desaparecer de la vista para siempre, mientras una terrible lluvia arrasaba con el fuego de la aldea. Cuando pudo abrir los ojos Mandió encontró que entre los maderos con que había aprisionado a la joven se alzaba una flor hasta entonces desconocida, alta, esbelta y del color de la luz, que al igual que la jovencita elevaba su corola al cielo siguiendo el rumbo de Cuarajhí, el sol.
                                </p>
                                <p>
                                Y así nació la flor que llamamos Girasol, que  hasta hoy cada día eleva su corola siguiendo el camino del sol.
                                </p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <h5>Música</h5>
                    <PlayerAudio
                    src={EnrteS}
                    song='Si te vas Para Entre Rios'
                    artist='Raúl Solari'
                    />
            </div>
        )
    }
}
