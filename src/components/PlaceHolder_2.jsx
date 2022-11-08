import React from 'react'
import Card from 'react-bootstrap/Card';
import { OffCanvas_3 } from './OffCanvas_3';
import { OffCanvas_4 } from './OffCanvas_4';

export const PlaceHolder_2 = () => {
  return (
<div className="d-flex justify-content-around">
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="/images/MHA.jpeg" />
        <Card.Body>
          <Card.Title>My Hero Academia</Card.Title>
          <Card.Text>
          La historia tiene lugar en un mundo donde el 80% de la población ha desarrollado «dones», 
          surgiendo así héroes y villanos. Entre el 20% de personas sin dones, se encuentra Izuku Midoriya,
          cuyo mayor deseo es poder estudiar en la U.A. y convertirse en un héroe como su ídolo All Might. Un día, tras conocer personalmente a 
          All Might, este le ofrece heredar sus poderes al ver su gran determinación a pesar de haber nacido sin don. Midoriya accede y empieza 
          a estudiar en la U.A, donde hace nuevos amigos, conoce otros héroes profesionales, aprende a dominar sus poderes y se enfrenta a auténticos
          villanos.
          </Card.Text>
          <OffCanvas_3/>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/Kaiju8.jpeg"/>
        <Card.Body>
          <Card.Title>Kaiju 8</Card.Title>
          <Card.Text>
          Japón es constantemente invadido por criaturas llamadas “kaiju”, Monstruos de diferentes formas y
           tamaños que causan catástrofes y destrucción donde quiera que van. Debido a ello, existe el "Cuerpo de Defensa",
            un servicio que se encargan de aniquilar y asesinar a los kaijuu cuando llegan a las ciudades, y el "Monster Sweeper",
             un servicio que se encarga de limpiar los cadáveres de los kaijuu en las ciudades cuando estos son exterminados por el Cuerpo
              de Defensa. 
          
          </Card.Text>
          <OffCanvas_4/>
        </Card.Body>

      </Card>
    </div>  )
}
