import React, { Component } from 'react'
import Pop from '../Components/facebook-pop.mp3'
import Familiar from '../audios/Jujuy-elfamiliar.mp3'
import Salta from '../audios/Salta.mp3'
import Pombero from '../audios/Formosa-elpombero.mp3'
import Lobizon from '../audios/Chaco-Ellobizon.mp3'
import Enrique from '../audios/Santiago-ElpitufoEnrique.mp3'
import Castoral from '../audios/Elcastoral.mp3'
import Guitarra from '../audios/Laguitarra.mp3'



let audio = new Audio(Pop)
let familiar = new Audio(Familiar)
let salta = new Audio(Salta)
let pombero = new Audio(Pombero)
let lobizon = new Audio(Lobizon)
let enrique = new Audio(Enrique)
let castoral = new Audio(Castoral)
let guitarra = new Audio(Guitarra)
export default class SuperUser extends Component {

    handleHover = () => {
        audio.play()
    }

    hoverJujuy = () => {
        familiar.play()
    }

    leaveJujuy = () => {
        familiar.pause()
    }

    // Salta
    hoverSalta = () => {
        salta.play()
    }

    leaveSalta = () => {
        salta.pause()
    }

    // Formosa
    hoverFormosa = () => {
        pombero.play()
    }

    leaveFormosa = () => {
        pombero.pause()
    }

    // Chaco
    hoverChaco = () => {
        lobizon.play()
    }

    leaveChaco = () => {
        lobizon.pause()
    }

    // Santiago del Estero
    hoverSantiago = () => {
        enrique.play()
    }

    leaveSantiago = () => {
        enrique.pause()
    }

    // Tucuman

    hoverTucuman = () => {
        castoral.play()
    }

    leaveTucuman = () => {
        castoral.pause()
    }

    // Catamarca

    hoverCatamarca = () => {
        guitarra.play()
    }

    leaveCatamarca = () => {
        guitarra.pause()

    }

    render() {
        return (
            <div className="MapaSuper">
                <div className="contenedor-mapa">
                
                        <a id="div-btn1" onMouseEnter={this.hoverJujuy} onMouseLeave={this.leaveJujuy}>
                        <div id="botonJujuy" className="boton button9"  title="Jujuy" ><span></span></div></a>
                    

                    
                        <a  id="div-btn2" onMouseEnter={this.hoverFormosa} onMouseLeave={this.leaveFormosa} >
                        <div id="botonFormosa" className="boton button8"  title="Formosa" ><span></span></div></a>
                   
                    
                        <a  id="div-btn3" onMouseEnter={this.handleHover}>
                        <div id="botonEntrerios" class="boton button7"  title="Entre Ríos" ><span></span></div></a>
                    

                    
                        <a  id="div-btn4" onMouseEnter={this.handleHover}>
                        <div id="botonMisiones" class="boton button13"  title="Misiones" ><span></span></div></a>
                    

                    
                        <a  id="div-btn5" onMouseEnter={this.handleHover}>
                        <div id="botonCorrientes" class="boton button6"  title="Corrientes" ><span></span></div></a>
                    

                    
                        <a id="div-btn6" onMouseEnter={this.hoverChaco} onMouseLeave={this.leaveChaco}>
                        <div id="botonChaco" class="boton button3"  title="Chaco" ><span></span></div></a> 
                    

                    
                        <a id="div-btn7" onMouseEnter={this.hoverSalta} onMouseLeave={this.leaveSalta} >
                        <div id="botonSalta" class="boton button16"  title="Salta" ><span></span></div></a>
                    

                    
                        <a  id="div-btn8" onMouseEnter={this.hoverSantiago} onMouseLeave={this.leaveSantiago}>
                        <div id="botonStgo" class="boton button21"  title="Stgo. Estero" ><span></span></div></a>
                   

                    
                        <a id="div-btn9" onMouseEnter={this.handleHover}>
                        <div id="botonTierra" class="boton button22"  title="Tierra Del Fuego" ><span></span></div></a> 
                    
                
                    
                        <a  id="div-btn10" onMouseEnter={this.hoverCatamarca} onMouseLeave={this.leaveCatamarca}>
                            <div id="botonCatamarca" class="boton button2"  title="Catamarca" ><span></span></div>
                        </a>
                    
                    
                  
                        <a id="div-btn11" onMouseEnter={this.hoverTucuman} onMouseLeave={this.leaveTucuman}>
                         <div id="botonTucuman" class="boton button23"  title="Tucumán" ><span></span></div></a>
                    
                    
                  
                        <a  id="div-btn12" onMouseEnter={this.handleHover}>
                        <div id="botonLarioja" class="boton button11"  title="La Rioja" ><span></span></div></a>
                    

                   
                        <a id="div-btn13" onMouseEnter={this.handleHover}>
                        <div id="botonSanjuan" class="boton button17"  title="San Juan" ><span></span></div></a>
                   
                    
                    
                        <a id="div-btn14" onMouseEnter={this.handleHover}>
                        <div id="botonCordoba" class="boton button5"  title="Córdoba" ><span></span></div></a>
                   
                    
                   
                        <a  id="div-btn15" onMouseEnter={this.handleHover}>
                        <div id="botonStafe" class="boton button20"  title="Sta. Fe" ><span></span></div></a>
                    
                    
                    
                        <a  id="div-btn16" onMouseEnter={this.handleHover}>
                         <div id="botonSanluis" class="boton button18"  title="San Luis" ><span></span></div></a>
                   
                    
                    
                        <a  id="div-btn17" onMouseEnter={this.handleHover}>
                        <div id="botonMendoza" class="boton button12"  title="Mendoza" ><span></span></div></a>
                 
                    
                    
                        <a  id="div-btn18" onMouseEnter={this.handleHover}>
                        <div id="botonBsas" class="boton button"  title="Bs. As." ><span></span></div>
                        </a>
                    
                    
                
                        <a  id="div-btn19" onMouseEnter={this.handleHover}>
                        <div id="botonCaba" class="boton button1"  title="CABA" ><span></span>
                        </div></a>
                   
                    
                
                         <a id="div-btn20" onMouseEnter={this.handleHover}>
                         <div id="botonLapampa" class="boton button10"  title="La Pampa" ><span></span></div></a>
                    
                   
                   
                        <a id="div-btn21" onMouseEnter={this.handleHover}>
                        <div id="botonRionegro" class="boton button15"  title="Río Negro" ><span></span></div></a>
                   
                    
                    
                        <a id="div-btn22" onMouseEnter={this.handleHover}>
                        <div id="botonNeuquen" class="boton button14"  title="Neuquén" ><span></span></div></a>
                
                    
                    
                        <a  id="div-btn23" onMouseEnter={this.handleHover}>
                        <div id="botonChubut" class="boton button4"  title="Chubut" ><span></span></div>
                        </a>
                   
                    
                    
                        <a   id="div-btn24" onMouseEnter={this.handleHover}>
                         <div id="botonStacruz" class="boton button19"  title="Sta. Cruz" ><span></span></div></a>
                    
                    
                 
                        <a id="div-btn25" onMouseEnter={this.handleHover}>
                        <div id="botonMalvinas" class="boton button24"  title="Malvinas" ><span></span></div></a>
                   
                    
                </div>
            </div>
        )
    }
}
