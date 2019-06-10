import React from 'react'


export default function SingleLegend({legend,mit,mito,leyenda}) {
    return (
        <div>
            <h5>Mito</h5>
            <p style={{fontFamily: "Baloo Da", fontSize:"20px", color:"#fff"}}>El mito es un relato de hechos maravillosos protagonizado por personajes sobrenaturales (dioses, semidioses, monstruos) o extraordinarios (héroes)</p>
        
            <h5>Leyenda</h5>
            <p style={{fontFamily: "Baloo Da", fontSize:"20px", color:"#fff"}}>En cambio, la leyenda, es una narración tradicional o colección de narraciones relacionadas entre sí de hechos imaginarios pero que se consideran reales</p>
          
        </div>
    )
}
