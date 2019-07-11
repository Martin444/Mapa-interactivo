import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Telesita from '../images/la telesita.jpg'
import Sachayoj from '../images/sachayoj.jpg'
import Pitufo from '../images/pitufo.jpg'

export default class SntEstero extends Component {
    render() {
        return (
            <div>
                <h5>Mitos</h5>
                <Accordion>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           <p  className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff", cursor:"pointer"}}>El Sachayoj</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Sachayoj} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                        <p className="font-weight-normal">
                        Al Sacháyoj es un ser que se le imagina con diversos aspectos: como un hombre barbudo y de cabellos largos cubierto o camuflado con la hierba llamada sayasta o barba de monte, o como un gaucho montando una mula negra la cual lleva ricos arreos adornados con metales y piedras preciosas, otras veces "se le ha visto" como un anciano cubierto de hierbas, o como un ser cuya cabeza y tronco es el de un anciano y cuyas extremidades son las de un animal ( puma, yaguar, guazuncho, zorro ), en otras ocasiones se considera que puede aparecer como un animal gigantesco ( conejo, guazuncho, vizcacha ); casi protéico en cuanto representa diversos aspectos de las forestas chaquenses, también se le supone como un arbusto con rostro humano.
 Se dice que El Sacháyoj suele llevar un morral o una yisca o bolsa con miel de abejas lechiguanas, hidromiel o mulitas con los cuales obsequia al ser humano valiente que se le aproxima y le acepta respetándole. Las descripciones de este numen consideran que emite sonidos semejantes al golpe de un hacha atrayendo con esto a los hacheros y meleros hacia las selvas en donde los hace extraviar. Se nutre con frutos y animales silvestres y suele deambular veloz y fácilmente aún entre las más densas forestas y espesuras haciendo desaparecer a los perros que le intentan perseguir.
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
                        <p  className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff", cursor:"pointer"}}>
                            La leyenda de la Telesita
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Telesita} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        Leyenda de la telesita: Cuenta la tradición que Telésfora Castillo, a quien llamaban Telesita, había nacido en Tolojona, y que vivió a mediados del siglo pasado en la región del Salado (Departamento Figueroa, Santiago del Estero). Conocida en toda la provincia como alma milagrosa, se la llama en algunos lugares, Telesita, Tele o Telésfora. (-según las versiones- era una 'inocente' (poca inteligencia)) Era de extraordinaria belleza y ambulaba constantemente por el interior de los bosques, frecuentando algunos boliches donde cantaba y bailaba, habiendo quien asegura haberla visto en la misma ciudad de Santiago del Estero. Los paisanos se acostumbraron pronto a la Telesita, a quien querían por su bondad y sencillez. Pero un día - ellos lo dicen - amaneció quemada en un rancho, habiendo quien afirma haberla hallado muerta en una acequia a tres leguas de la ciudad de Santiago del Estero. Una versión cuenta que se trataba de una jovencita que mendigaba y murió quemada al tratar de cal
                        </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p  className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff", cursor:"pointer"}}>
                            El pitufo Enrique
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Pitufo} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
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
