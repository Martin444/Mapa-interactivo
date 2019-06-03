import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Mapa extends Component {
    render() {
        return (
            <div>
                
                <div className="contenedor-mapa">
                    <Link to="/Jujuy">
                        <a id="div-btn1">
                        <div id="botonJujuy" className="boton button9"  title="Jujuy" ><span></span></div></a>
                    </Link>

                    <Link to="/Formosa">
                        <a  id="div-btn2"   >
                        <div id="botonFormosa" className="boton button8"  title="Formosa" ><span></span></div></a>
                    </Link>
                    <Link to="/Entre-Rios">
                        <a  id="div-btn3" >
                        <div id="botonEntrerios" class="boton button7"  title="Entre Ríos" ><span></span></div></a>
                    </Link>

                    <Link to="/Misiones">
                        <a  id="div-btn4">
                        <div id="botonMisiones" class="boton button13"  title="Misiones" ><span></span></div></a>
                    </Link>

                    <Link to="/Corrientes">
                        <a  id="div-btn5">
                        <div id="botonCorrientes" class="boton button6"  title="Corrientes" ><span></span></div></a>
                    </Link>

                    <Link to="/Chaco">
                        <a id="div-btn6">
                        <div id="botonChaco" class="boton button3"  title="Chaco" ><span></span></div></a> 
                    </Link>


                    <Link to="/Salta">
                        <a id="div-btn7">
                        <div id="botonSalta" class="boton button16"  title="Salta" ><span></span></div></a>
                    </Link>

                    <Link to="/Santiago-del-Estero">
                        <a  id="div-btn8">
                        <div id="botonStgo" class="boton button21"  title="Stgo. Estero" ><span></span></div></a>
                    </Link>


                    <Link to="/Tierra-del-Fuego">
                        <a id="div-btn9">
                        <div id="botonTierra" class="boton button22"  title="Tierra Del Fuego" ><span></span></div></a> 
                    </Link>
                    


                    <Link to="/Catamarca">
                        <a  id="div-btn10">
                            <div id="botonCatamarca" class="boton button2"  title="Catamarca" ><span></span></div>
                        </a>
                    </Link>
                    
                    <Link to="/Tucumán">
                        <a id="div-btn11">
                         <div id="botonTucuman" class="boton button23"  title="Tucumán" ><span></span></div></a>
                    </Link>
                    
                    <Link to="/La-Rioja">
                        <a  id="div-btn12">
                        <div id="botonLarioja" class="boton button11"  title="La Rioja" ><span></span></div></a>
                    </Link>

                    
                    <Link to="/San-Juan">
                        <a id="div-btn13">
                        <div id="botonSanjuan" class="boton button17"  title="San Juan" ><span></span></div></a>
                    </Link>
                    
                    <Link to="/Cordoba">
                        <a id="div-btn14">
                        <div id="botonCordoba" class="boton button5"  title="Córdoba" ><span></span></div></a>
                    </Link>
                    
                    <Link to="/Santa-Fe">
                        <a  id="div-btn15">
                        <div id="botonStafe" class="boton button20"  title="Sta. Fe" ><span></span></div></a>
                    </Link>
                    
                    <Link to="/San-Luis">
                        <a  id="div-btn16">
                         <div id="botonSanluis" class="boton button18"  title="San Luis" ><span></span></div></a>
                    </Link>
                    
                    <Link to="/Mendoza">
                        <a  id="div-btn17">
                        <div id="botonMendoza" class="boton button12"  title="Mendoza" ><span></span></div></a>
                    </Link>
                    

                    <Link to="/BsAs">
                        <a  id="div-btn18">
                        <div id="botonBsas" class="boton button"  title="Bs. As." ><span></span></div>
                        </a>
                    </Link>
                    
                    <Link to="/CABA">
                        <a  id="div-btn19">
                        <div id="botonCaba" class="boton button1"  title="CABA" ><span></span>
                        </div></a>
                    </Link>
                    
                    <Link to="/La-Pampa">
                         <a id="div-btn20">
                         <div id="botonLapampa" class="boton button10"  title="La Pampa" ><span></span></div></a>
                    </Link>
                   
                    <Link to="/Rio-Negro">
                        <a id="div-btn21">
                        <div id="botonRionegro" class="boton button15"  title="Río Negro" ><span></span></div></a>
                    </Link>
                    
                    <Link to="/Neuquen">
                        <a id="div-btn22">
                        <div id="botonNeuquen" class="boton button14"  title="Neuquén" ><span></span></div></a>
                    </Link>
                    


                    <Link to="/Chubut">
                        <a  id="div-btn23">
                        <div id="botonChubut" class="boton button4"  title="Chubut" ><span></span></div>
                        </a>
                    </Link>
                    
                    <Link to="/Santa-Cruz">
                        <a   id="div-btn24">
                         <div id="botonStacruz" class="boton button19"  title="Sta. Cruz" ><span></span></div></a>
                    </Link>
                    
                    <Link to="/Malvinas">
                        <a   id="div-btn25">
                        <div id="botonMalvinas" class="boton button24"  title="Malvinas" ><span></span></div></a>
                    </Link>
                    

                </div>


            </div>
        )
    }
}
