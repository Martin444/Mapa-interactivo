import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Pericana from '../images/pericana.jpg'
import Futre from '../images/futre.jpg'
import Tue from '../images/tue.jpg'


export default class Mendoza extends Component {
    render() {
        return (
            <div>
                <h5>Mitos</h5>
                 <Accordion>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>La Pericana</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Pericana} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                        <p className="font-weight-normal">
                        Es un personaje mas difundido en San Juan, algunos dicen que es una vieja muy horrible, flaca gigantesca y de largos dientes, que sale por la siesta para correr y a pegar con un chicote (especie de latigo) a los niños que se encuentran a esa hora fuera de sus casas sin permiso de sus padres o haciendo picardias.
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
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>
                            El Futre
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Futre} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        Contada por el Ingeniero Fidel Roig, se trataria de un ingles bien vestido (y de ahi su nombre, porque se le llamaba futre a las personas vestidas elegantemente) que, tras haber perdido todo en la sala de juego del hotel de esa localidad, salio vestido de frac en plena noche y se perdio entre los cerros nevados, sin que se tuviera mas noticias de él, salvo las operaciones fantasmales que sucedieron despues de su desaparicion, dicen que se lo ve cabizbajo y con mucha pena
                        </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>
                            Tue-tue
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Tue} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        Esta leyenda tiene su origen en el sur argentino y tiene como protagonista a un pájaro negro grande que aparece por las noches.
                        </p>
                        <p>El ave se hace presente en alguna casa a la hora de cenar y espera una invitación para regresar al día siguiente en forma humana.</p>
                        <p>Como ya fue invitado, no puedes negarte a su visita humana, si no caerá sobre ti una maldición. Para alejarlo hay que decir: “Martes hoy, martes mañana, martes toda la semana”.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        )
    }
}
