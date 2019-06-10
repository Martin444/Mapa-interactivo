import React, { Component } from 'react'
import SingleLegend from '../Components/SingleLegend'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Ucumar from '../images/ucumar.jpg'
import Kakuy from '../images/kakuy.jpeg'
import Ekeko from '../images/ekeko.jpg'
import Mayup from '../images/mayup.jpg'
import Coquena from '../images/coquena.png'

export default class Salta extends Component {
    render() {
        return (
            <div>
                <h5>Mitos</h5>
            <Accordion>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>El Ucumar</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Ucumar} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>
                        <p className="font-weight-normal">
                        El ucumar es un hombre oso que vive en los lugares muy escondidos de las quebradas, en las cuevas de las peñas, en medio de los montes y cerros altísimos

Su madre, una joven cazadora, se extravió en la selva y fué atrapada por un oso, dando así orígen a la raza de los ucumares.

Es petiso, panzón y su cuerpo esta completamente cubierto de pelos largos y negros. Tiene barba y los cabellos le cubren la cara de rasgos humanos.Sus piernas son comolas de un oso y los pies poseen, a diferencia de los nuestros, el dedo grande muy abierto. Sus huellas han sido encontradas cerca de las vertientes donde va a tomar agua.Los ojos son pequeños pero muy vivaces y de mirada intensa. Es un ser con una fuerza extraordinaria.Pueden oirse sus gritos cuando el viento es favorable.

La gente lo teme pués roba a las mujeres y las lleva a vivir con el. El ucumar hembra rapta hombres jovenes para formar pareja.

Es frecuente que las mujeres secuestradas regresen a sus hogares después de algunos años. Los relatos de las sobrevivientes coinciden: todas afirman que vivían en una cueva, la cual el hombre-oso cerraba con una gran piedra. Cuando los hijos crecen, heredan la fuerza del padre y pueden correr la piedra, librándose y ayudando a escapar a sus madres de la prisión.

Existen versiones de que no sería un animal, sinó el alma de un hombre rico condenado por mezquino y malvado. Bajo el aspecto de ucumar, echando fuego por los ojos, ataca a la gente para matarla y comerse el corazón; pero es probable que estos datos sean rasgos exagerados provocados por el temor que infunde. De hecho, muchos cuentan que es generoso con aquellos a quienes atrapa, los cuida y los alimenta con miel y frutas silvestres.

                        </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>
                            El Ekeko
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Ekeko} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        keko, Iquiqu o Tonupa, dios de la abundancia y de la Felicidad para los Aymaras y Collas, su culto se extiende desde el centro de Perú hasta el noroeste de la Argentina.  
                        </p>
                        <p>Se lo representa con un muñeco de terracota que puede presentarse en varios tamaños y generalmente tiene alrededor de 20 cm de altura. Representa a un hombre con las típicas vestiduras de la región andina. De su cuerpo cuelgan pequeñas bolsitas, que a modo de alforjas contienen cereales, tabaco y billetes enrollados que funcionan como exvotos para propiciar la adquisición de bienes materiales. El poseedor del Ekeko puede agregar nuevos exvotos en miniatura que se colgarán de la estatuilla o se ubicarán a su lado, representando aquello que se desea obtener. </p>
                        <p>Para lograr los favores solicitados, hay que hacer fumar al Ekeko en el momento en que se pone el objeto o bien y más seguro los días viernes. A tal fin, la figura presenta una oquedad en la zona donde debería estar la boca, y es allí donde debe colocarse un cigarrillo encendido. Si el deseo o pedido es aceptado, del cigarrillo saldrá humo como si realmente el Ekeko fumara. </p>
                        <p>Tiene una faz negativa, si existiera una mujer joven soltera en la familia, inmediatamente se enamora de ella y se siente dueño. Es muy celoso y corre a cualquier pretendiente. Se pone malo si no lo hacen fumar los viernes y puede traer desgracias al padre de la joven. </p>
                        <h5>Historia</h5>
                        <p>El ekeko es una deidad venerada desde siglos antes de la conquista del territorio por los españoles. Sus seguidores creían que ahuyentaba la desgracia de los hogares y atraía la fortuna. </p>
                        <p>Se piensa que se originó entre los Tiwanaku, habitantes del altiplano boliviano y de las riberas del lago Titicaca. Tras la conquista por los incas, estos adoptaron la deidad, y la convirtieron en símbolo de la fertilidad y la buena suerte</p>
                        <p>En sus inicios, el Ekeko era de piedra, jorobado, tenía rasgos indígenas y no llevaba ningún tipo de vestimenta: su desnudez era el símbolo de la fertilidad. </p>
                        <p>En la colonia el culto a la deidad tomó nueva fuerza y en La Paz (actual capital de Bolivia) durante el cerco que ésta ciudad soportó durante un alzamiento indígena contra el control español. </p>
                        <p>Hoy en día, existe en la sierra sur del Perú como en el occidente de Bolivia la creencia de que el ekeko es capaz de conceder los deseos de sus seguidores si estos le ofrecen una copia de ellos en miniatura, y muchos tienen en casa una imagen para que les resuelva los problemas, dejando dinero a su lado y manteniendo un cigarro encendido en su boca, que sólo puede consumirse hasta la mitad. Las figuras que le ofrecen son de cerámica, metal o piedra, reproducciones exactas del objeto de sus peticiones: automóviles, electrodomésticos y alimentos. Cuando se desea amor, se le entregan miniaturas de gallos y gallinas. </p>
                        <p>La deidad es conocida en los diferentes lugares del mundo donde colonias de emigrantes bolivianos han extendido su culto. </p>
                        <p>La figura del Ekeko tomó gran popularidad en la provincia de Buenos Aires (Argentina) durante el periodo hiperinflacionario de los años ochenta. Allí sus adeptos lo tomaron como una especie de patrono de la fortuna.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            {/* Leyendas */}
            <h5>Leyendas</h5>
            <Accordion>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>
                            El Kakuy
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Kakuy} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p>El kakuy o cácuy es un ave de la familia de los cucúlidos que tiene hábitos nocturnos y es de rapiña. Hay dos versiones asociadas a esa leyenda:</p>
                            <h5>Hermanos</h5>
                            <p>La primera leyenda cuenta la historia de dos hermanos, una mujer y un hombre. El hombre era noble y de buenos sentimientos, mientras que la mujer era malintencionada y desagradecida.</p>
                            <p>La hermana constantemente hacía desplantes al hermano. En una ocasión el hermano regresaba de trabajar, agotado y sediento, y pidió a su hermana que le trajera una bebida de miel refrescante. Ella buscó la bebida, pero antes de dársela a su hermano, vació el recipiente y vertió la bebida en el suelo.</p>
                            <p>Este mismo escenario se repitió varias veces con bebidas y comidas, y el hermano decidió darle un escarmiento. Otro día él le pidió a ella que le acompañara a tomar miel de un árbol grande cercano; iban trepando juntos y la hermana, que iba primera, alcanzó la cima.</p>
                            <p>El hermano descendió y al mismo tiempo fue cortando las ramas para así evitar que su hermana pudiese bajar. El hermano se fue y ella se quedó allí, sola y asustada. Pasaron las horas, su terror aumentó, y se sintió aún más horrorizada al darse cuenta de que, poco a poco, su cuerpo iba transformándose.</p>
                            <p>En vez de pies tuvo garras, sus brazos se convirtieron en alas y le salieron plumas por todo su cuerpo. Según la leyenda, esta es la explicación de la presencia de ese pájaro nocturno, que todas las noches grita “¡turay!, ¡turay!”, que en quéchua significa “¡hermano!, ¡hermano!”.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                    {/* Segunda leyenda */}

                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>
                            Mayup Maman
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Mayup} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        Madre del río. Deidad de Santiago del Estero, Tucumán y sur de Salta. 
                        </p>
                        <p> Vive principalmente en el Río Dulce y en los encajonados que hace el Río Juramento. </p>
                        <p>Se la representa como una hermosa mujer rubia que se peina con un peine de oro, con un gajo de úlua o una ñajcha de pescado. Es el eterno femenino: la belleza deslumbrante y de atracción hipnótica, es símbolo de la fuerza alucinante de la mujer sobre el hombre.</p>
                        <p>Como su mitad inferior tiene casi siempre la forma de un pez, se podría decir que es una sirena fluvial. Se la ve por lo general cabalgando la primera ola de la creciente del Río o hundiéndose y saliendo de sus turbias aguas, pero a menudo también colgándose de los árboles ribereños, en las noches de luna o siestas apacibles. 
</p>
                        
                        <p>Se cuenta que en sus grandes tinajas guarda la lluvia, y que anuncia a los hombres buenos la llegada de las crecientes y la formación de bañados. </p>
                        <p>Pero no todo es bondad en ella. Se dice que a veces arrastra a los hombres al fondo de las aguas, ahogándolos.</p>
                        <p>El hombre, enajenado por el embrujo de su hermosura y la luz magnética de sus ojos, se ha de perder en la vorágine turbulenta de los veloces remolinos. </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Coquena */}
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>
                            El Coquena
                        </p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                        <img src={Coquena} className="img-fluid mx-auto d-block" style={{height:"200px"}} alt="Responsive"/>
                        <p className="font-weight-normal ">
                        En las inmensas soledades de la puna, los ganados están protegidos. Un enanito misterioso, un duendecillo, que todo lo ve, es quien defiende sus vidas de las crueldades humanas. Nadie ha visto a Coquena. Es fama que tiene cara de cholo y viste casaca y pantalón de vicuña. Lleva también diminutas ojotas y ancho sombrero de suave pelo. Desde las alturas contempla sus bestias sin ser visto. Sólo se ha escuchado su silbido, que es mágico llamado. Pero es tal la seguridad de su presencia que todos le temen. Por eso no matan vicuñas ni llamas para utilizar su pelo. 
                        </p>
                        <p> Prefieren cortar suavemente el vellón. Tampoco maltratan a las arrias cuando cargadas de sal, bajan de los cerros. Se cuentan historias, en que justiciero, Coquena ha quitado las llamas a quien no sabía valorar ese don; y como ha premiado a los buenos pastores que, en tormentas de nieve, cuando el viento blanco amenazaba cubrirlo todo, salvan con peligro de su vida su hato de cabras en plena borrasca. Y está su persona tan ligada a los hechos que ocurren por estas regiones, que, en Salta, cuando aparece un forastero, para adquirir provisiones y, tocándose con el codo, murmuran: Es coquena.  </p>
                        <p>De un escrito de Juan Carlos Dávalos. </p>
                        <p>COQUENA </p>
                        
                        <p>Cazando vicuñas anduve en los cerros 

Heridas de bala se escaparon dos. 

- No caces vicuñas con armas de fuego ; 

Coquena se enoja, - me dijo un pastor.  </p>
                        <p>- ¿Por qué no pillarlas a la usanza vieja, 

cercando la hoyada con hilo punzó ? 

- ¿Para qué matarlas, si sólo codicias 

para tus vestidos el fino vellón ?</p>
                        <p>- No caces vicuñas con armas de fuego, 

Coquena se venga, - te lo digo yo 

¿No viste en las mansas pupilas obscuras 

brillar la serena mirada del dios ? </p>
                        <p>- ¿Tú viste a Coquena ? - Yo nunca lo vide, 

pero si mi agüelo, - repuso el pastor ; 

una vez oíle silbar solamente 

y en unos tolares, como a la oración.</p>
                        <p>Coquena es enano ; de vicuña lleva 

sombrero, escarpines, casaca y calzón, 

gasta diminutas ojotas de duende, 

y diz que es de cholo la cara del dios.</p>
                        <p>De todo ganado que pase en los cerros 

Coquena es oculto, celoso pastor ; 

Si ves a lo lejos moverse las tropas, 

es porque invisible las arrea el dios. </p>

                        <p>Y es él quien se roba de noche las llamas 

cuando con exceso las carga el patrón. </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            </div>
        )
    }
}
