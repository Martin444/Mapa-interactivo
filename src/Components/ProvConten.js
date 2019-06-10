import React, { Component } from 'react'
import BsAs from '../Provincias/BsAs'
import CABA from '../Provincias/CABA'
import Catamarca from '../Provincias/Catamarca'
import Chaco from '../Provincias/Chaco'
import Chubut from '../Provincias/Chubut'
import Cordoba from '../Provincias/Cordoba'
import Corrientes from '../Provincias/Corrientes'
import EntreRios from '../Provincias/EntreRios'
import Formosa from '../Provincias/Formosa'
import Jujuy from '../Provincias/Jujuy'
import LaPampa from '../Provincias/LaPampa'
import LaRioja from '../Provincias/LaRioja'
import Malvinas from '../Provincias/Malvinas'
import Mendoza from '../Provincias/Mendoza'
import Misiones from '../Provincias/Misiones'
import Neuquen from '../Provincias/Neuquen'
import RioNegro from '../Provincias/RioNegro'
import Salta from '../Provincias/Salta'
import SanJuan from '../Provincias/SanJuan'
import SanLuis from '../Provincias/SanLuis'
import SantaFe from '../Provincias/SantaFe'
import SntCruz from '../Provincias/SntCruz'
import SntEstero from '../Provincias/SntEstero'
import TrFuego from '../Provincias/TrFuego'
import Tucuman from '../Provincias/Tucuman'

import DefaultLegend from './DefaultLegend'


import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default class ProvConten extends Component {
    render() {
        return (
            <div className="card shadow">
                <div className="card-body" style={{background: "#E0463C"}}>
                <Link to="/">
                    <h5 className="card-header">¿Que son los mitos y leyendas?</h5>
                </Link>
                <Switch>
                    <Route exact path="/" component={DefaultLegend}/>
                    <Route exact path="/BsAs" component={BsAs}/>
                    <Route exact path="/CABA" component={CABA}/>
                    <Route exact path="/Catamarca" component={Catamarca}/>
                    <Route exact path="/Chaco" component={Chaco}/>
                    <Route exact path="/Chubut" component={Chubut}/>
                    <Route exact path="/Cordoba" component={Cordoba}/>
                    <Route exact path="/Corrientes" component={Corrientes}/>
                    <Route exact path="/Entre-Rios" component={EntreRios}/>
                    <Route exact path="/Formosa" component={Formosa}/>
                    <Route exact path="/Jujuy" component={Jujuy}/>
                    <Route exact path="/La-Pampa" component={LaPampa}/>
                    <Route exact path="/La-Rioja" component={LaRioja}/>
                    <Route exact path="/Malvinas" component={Malvinas}/>
                    <Route exact path="/Mendoza" component={Mendoza}/>
                    <Route exact path="/Misiones" component={Misiones}/>
                    <Route exact path="/Neuquen" component={Neuquen}/>
                    <Route exact path="/Rio-Negro" component={RioNegro}/>
                    <Route exact path="/Salta" component={Salta}/>
                    <Route exact path="/San-Luis" component={SanLuis}/>
                    <Route exact path="/San-Juan" component={SanJuan}/>
                    <Route exact path="/Santa-Fe" component={SantaFe}/>
                    <Route exact path="/Santa-Cruz" component={SntCruz}/>
                    <Route exact path="/Santiago-del-Estero" component={SntEstero}/>
                    <Route exact path="/Tierra-del-Fuego" component={TrFuego}/>
                    <Route exact path="/Tucumán" component={Tucuman}/>
                </Switch>
                </div>
            </div>
        )
    }
}
