import React, { Component } from 'react'
import Mapa from '../Components/Mapa'
import ProvConten from '../Components/ProvConten'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class Home extends Component {
    state ={
        hideNav:null
    }


    componentDidMount(){
        window.addEventListener("resize", this.resize.bind(this))
        this.resize();
    }

    resize(){
        this.setState({hideNav: window.innerHeight})
        console.log(this.state.hideNav);
    }


    render() {
        return (
            <>

            <div className="App">
                <div className="container">
                    <div className="row justify-content-md-center">
                    <div className="col">
                        <ProvConten/> 
                    </div>
                    <div className=" col col-lg-5" >
                    <Accordion className="shadow">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                <p className="text-center text-uppercase">Ver Mapa</p>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                     <Mapa/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </div>
                </div>
                </div>
                
            </div>
                
            </>
        )
    }
}

