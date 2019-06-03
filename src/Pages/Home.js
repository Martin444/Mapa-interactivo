import React, { Component } from 'react'
import Mapa from '../Components/Mapa'
import ProvConten from '../Components/ProvConten'

export default class Home extends Component {
    render() {
        return (
            <>

            <div className="App">
                <div className="row mx-md-3">
                    <div className="col-4 px-md-1 ">
                        <Mapa/>
                    </div>
                    <div className="col px-md-1 mt-5">
                        <ProvConten/> 
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}
