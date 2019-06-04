import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


export default function SingleLegend({legend,mit,mito,leyenda, imgMit, imgLeg}) {
    return (
        <div>
            <h5>Mitos</h5>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           <p className="text-primary">{mit}</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={imgMit} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                        <p className="font-weight-normal">{mito}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <h5>Leyendas</h5>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <p className="text-primary">{legend}</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={imgLeg} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">{leyenda}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}
