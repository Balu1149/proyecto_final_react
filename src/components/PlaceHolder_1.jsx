import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { OffCanvas_1 } from './OffCanvas_1';
import { OffCanvas_2 } from './OffCanvas_2';
import { OffCanvas_4 } from './OffCanvas_4';




export const PlaceHolder_1 = () => {
  return (
<div className="d-flex justify-content-around">
      <Card style={{ width: '18rem', color:'white', background:"#7F0102", marginTop: '100px'}}>
        <Card.Img variant="top" src="/images/JOJO.jpeg" />
        <Card.Body>
          <Card.Title>Jojo's Bizarre Adventure</Card.Title>
          <Card.Text style={{color:'white', textAlign:"justify"}}>
          La trama se desarrolla en torno a la historia del linaje Joestar, 
          una poderosa familia de origen británico destinada a combatir fuerzas 
          sobrenaturales malvadas usando poderes adquiridos
          </Card.Text>
          <OffCanvas_1/>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem', color:'white', background:"#7F0102", marginTop: '100px'}}>
        <Card.Img variant="top" src="/images/Kaiju8.jpeg" />
        <Card.Body>
          <Card.Title>Kaiju 8</Card.Title>
          <Card.Text style={{color:'white', textAlign:"justify"}}>
          Japón es constantemente invadido por criaturas llamadas “kaiju”, Monstruos de diferentes formas y
           tamaños que causan catástrofes y destrucción donde quiera que van. Debido a ello, existe el "Cuerpo de Defensa",
            un servicio que se encargan de aniquilar y asesinar a los kaijuu cuando llegan a las ciudades, y el "Monster Sweeper",
             un servicio que se encarga de limpiar los cadáveres de los kaijuu en las ciudades cuando estos son exterminados por el Cuerpo
              de Defensa. 
          </Card.Text>
          <OffCanvas_4/>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', color:'white', background:"#7F0102", marginTop: '100px'}}>
        <Card.Img variant="top" src="/images/Saint_Seiya.jpeg" />
        <Card.Body>
          <Card.Title>Saint Seiya</Card.Title>
          <Card.Text style={{color:'white', textAlign:"justify"}}>
          Saori Kido, directora de la fundación Kido, organiza un torneo entre los caballeros 
          (El Torneo Galáctico) en el cual participan guerreros con poderosas armaduras y que son conocidos
           como los Caballeros de Bronce, quienes luchan no solo por motivos personales, sino también por la codiciada 
           y misteriosa Armadura Dorada
          </Card.Text>
          <OffCanvas_2/>
        </Card.Body>

      </Card>
    </div>  )
}
