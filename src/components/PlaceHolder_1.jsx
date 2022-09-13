import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { OffCanvas_1 } from './OffCanvas_1';
import { OffCanvas_2 } from './OffCanvas_2';



export const PlaceHolder_1 = () => {
  return (
<div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/JOJO.jpeg" />
        <Card.Body>
          <Card.Title>Jojo's Bizarre Adventure</Card.Title>
          <Card.Text>
          La trama se desarrolla en torno a la historia del linaje Joestar, 
          una poderosa familia de origen británico destinada a combatir fuerzas 
          sobrenaturales malvadas usando poderes adquiridos
          </Card.Text>
          <OffCanvas_1/>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/Saint_Seiya.jpeg" />
        <Card.Body>
          <Card.Title>Saint Seiya</Card.Title>
          <Card.Text>
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
