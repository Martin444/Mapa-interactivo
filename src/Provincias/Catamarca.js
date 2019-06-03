import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Quirquincho from '../images/quirquincho.jpg'
import Guitarra from '../images/laGuitarra.jpg'

export default class Catamarca extends Component {
    render() {
        return (
            <div>
               <SingleLegend imgMit={Quirquincho} imgLeg={Guitarra}
               mit="El Quirquincho"
               mito="El quirquincho hera un hombre muy habilidoso con el telar casero, construido con horcones y alambres firmes.

               Cuando llego el otoño sintió frío y conocedor de la tarea de dispone a tejer un poncho bien abrigado. Preparo la urdiembre, los ridos del peine para dar por comenzada su labor.
               
               El tejido en sus principios salía perfecto, por su uniformidad de la trama y lo apretada de la malla.
               
               Observando la primera franja, se puso muy contento y satisfecho, pero al retomar su tarea advirtió que se había cansado, por esta razón y considerando que todavía le faltaba mucho, tomo hilos gruesos y poco retorcidos, para hacer una trama floja.
               
               Una vez que hubo adelantado, volvió a recuperar la buena voluntad para el trabajo y termino con el mismo esmero con que había comenzado antes.
               
               El dios de estas regiones, que observa a los seres de su creación para darles según sus actitudes una misión que cumplir, pensó que estaría mejor con el reino animal y lo transformó en desdentado.
               
               Es por eso que el caparazón que los protege que no es más que el poncho que tejió tiene las placas apretadas en los extremos y más grandes y separadas en el centro"
               
               legend="La leyenda de la guitarra"
               
               leyenda="En las soledades de las sierras fue a vivir un gaucho con su esposa en un ranchito humilde, pero que tenía la alegría de los hogares bien constituidos.

               La vida pasaba sin sobresaltos en total calma, hasta que una tarde llega por el lugar un forastero de mala vida, que aprovechando que el gaucho estaba en plena tarea del campo, quiso conquistar el amor de la mujer, quien se resistió con todas sus fuerzas y grito desesperadamente pidiendo ayuda a su marido, el que al escucharla regreso presuroso en su caballo.
               
               Al llegar a su rancho ya hera tarde, el mal hombre había herido con su puñal de muerte a la mujer y caida en el suelo se desangraba. El esposo busco a asesino, pero este al darse cuenta del daño que había causado puso pies en polvorosa.
               
               El pobre gaucho quedo allí acongojado, triste pensando en la compañera que ya estaba con Dios, y así abrazo con ternura el cuerpo de la mujer durante toda la noche hasta quedarse dormido.
               
               Dios se apiado de el y al otro día al despertarse, encontró entre sus brazos un instrumento de cuerdas y con las formas ondulantes del de las caderas de una mujer.
               
               Desde ese momento el gaucho que esta solo, ya tiene una compañera, la fiel guitarra criolla."
               />
            </div>
        )
    }
}
