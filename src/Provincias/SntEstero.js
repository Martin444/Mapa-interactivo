import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Telesita from '../images/la telesita.jpg'
import Sachayoj from '../images/sachayoj.jpg'

export default class SntEstero extends Component {
    render() {
        return (
            <div>
                <SingleLegend imgMit={Sachayoj} imgLeg={Telesita}
                mit="El Sachayoj"
                mito='Al Sacháyoj es un ser que se le imagina con diversos aspectos: como un hombre barbudo y de cabellos largos cubierto o camuflado con la hierba llamada sayasta o barba de monte, o como un gaucho montando una mula negra la cual lleva ricos arreos adornados con metales y piedras preciosas, otras veces "se le ha visto" como un anciano cubierto de hierbas, o como un ser cuya cabeza y tronco es el de un anciano y cuyas extremidades son las de un animal ( puma, yaguar, guazuncho, zorro ), en otras ocasiones se considera que puede aparecer como un animal gigantesco ( conejo, guazuncho, vizcacha ); casi protéico en cuanto representa diversos aspectos de las forestas chaquenses, también se le supone como un arbusto con rostro humano.
                Se dice que El Sacháyoj suele llevar un morral o una yisca o bolsa con miel de abejas lechiguanas, hidromiel o mulitas con los cuales obsequia al ser humano valiente que se le aproxima y le acepta respetándole. Las descripciones de este numen consideran que emite sonidos semejantes al golpe de un hacha atrayendo con esto a los hacheros y meleros hacia las selvas en donde los hace extraviar. Se nutre con frutos y animales silvestres y suele deambular veloz y fácilmente aún entre las más densas forestas y espesuras haciendo desaparecer a los perros que le intentan perseguir.'
                
                legend="La leyenda de la Telesita"
                leyenda="Leyenda de la telesita: Cuenta la tradición que Telésfora Castillo, a quien llamaban Telesita, había nacido en Tolojona, y que vivió a mediados del siglo pasado en la región del Salado (Departamento Figueroa, Santiago del Estero). Conocida en toda la provincia como alma milagrosa, se la llama en algunos lugares, Telesita, Tele o Telésfora. (-según las versiones- era una 'inocente' (poca inteligencia)) Era de extraordinaria belleza y ambulaba constantemente por el interior de los bosques, frecuentando algunos boliches donde cantaba y bailaba, habiendo quien asegura haberla visto en la misma ciudad de Santiago del Estero. Los paisanos se acostumbraron pronto a la Telesita, a quien querían por su bondad y sencillez. Pero un día - ellos lo dicen - amaneció quemada en un rancho, habiendo quien afirma haberla hallado muerta en una acequia a tres leguas de la ciudad de Santiago del Estero. Una versión cuenta que se trataba de una jovencita que mendigaba y murió quemada al tratar de cal"
                
                />
            </div>
        )
    }
}
