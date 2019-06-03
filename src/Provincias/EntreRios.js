import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Solapa from '../images/solapa.jpg'
import Cardenal from '../images/cardenal.jpg'


export default class EntreRios extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgLeg={Cardenal} imgMit={Solapa}
                mit="La Solapa entrerriana"
                mito="La Solapa, muy mentado en las zonas rurales. Se trata de un mito popular que tiene distintas representaciones. Santos Tala en su conocida canción la describe como “Toda vestida de blanco… Con su sombrero grandote”(1). En Nogoyá se lo ha caracterizado como una especie de águila que atrapa y se lleva a los niños que encuentra solos a la hora da la siesta, especialmente en los días de verano.
                En efecto, este duende suele atemorizar a los niños, que amparados en la impunidad de la tradicional siesta entrerriana, particularmente en el verano, salen al campo a hacer de las suyas: cazar pájaros con la honda, pescar o zambullirse en algún arroyo con todos los riesgos que implica, sumado al sol implacable de la primera tarde veraniega. “Gurisito entrerrianito / no andés trotiando a lo iguana …Revisando los niditos”, recomienda Santos Tala. Y seguramente, el mito se crea como una forma de proteger a los gurises de estos incidentes.
                Fabián Gustavo Reato caracteriza a este duende como “una vieja vestida de negro y con una bolsa de leña cargada”.(2) En Santa Fe también se lo encuentra bajo la forma de un duende pequeño, tiene la altura de una bola, y piel de color amarillo intenso."
                legend="La leyenda del cardenal"
                leyenda=" Hace mucho tiempo, cuando los calchaquíes dominaban el noroeste argentino, Mama Quilla (Luna) envió a su hija Chasca para que ayudara a los hombres y les enseñara a sembrar y aprovechar las hierbas como medicina para sus dolencias.

                Chasca llegó a la tribú del bondadoso Punquillo, quien la recibió con simpatía y agradecimiento y le dio a su propio hijo Ancali como esposo. Ancali ayudó a Chasca a curar enfermos y extraer valiosas medicinas de las plantas de la región, con gran desagrado del Machi (hechicero) de la tribú, que hasta ese momento había ejercido la labor de curandero. Éste, deseoso de venganza, invocó a Zupay (diablo) para envenenar al cacique, y pronto Punquillo cayó enfermo de un misterioso mal que las artes y los conocimientos de Chasca fueron insuficientes para curar.
           
                Al morir Punquillo, el Machi arengó a la tribú con falsas palabras: 'Chasca y Ancali han causado la muerte de nuestro soberano_ aseguró_ para ascender al trono. Atémoslos en una elevada roca y dejémoslos abandonados'. Así lo hicieron: maniataron a ambos jovenes y los dejaron en un alto peñasco, mientras varios soldados y guerreros les apuntaban con agudas flechas. Chasca, al ver que Ancali recibia en medio de su frente un certero flechazo, unió su cabecita morena a la de él y pronto la sangre de Ancali tiño la cabeza de ambos prometidos. Fue entonces cuando Mama Quilla, compadecida de los jovenes, los convirtió en dos pájaros de pluma gris y cabecita roja, a los que conocemos con el nombre de cardenales"
                
                />
            </div>
        )
    }
}
