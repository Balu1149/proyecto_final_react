import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
export const OffCanvas_4 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ver más
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Trama</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        Japón es constantemente invadido por criaturas llamadas “kaiju”, Monstruos de diferentes formas y
           tamaños que causan catástrofes y destrucción donde quiera que van. Debido a ello, existe el "Cuerpo de Defensa",
            un servicio que se encargan de aniquilar y asesinar a los kaijuu cuando llegan a las ciudades, y el "Monster Sweeper",
             un servicio que se encarga de limpiar los cadáveres de los kaijuu en las ciudades cuando estos son exterminados por el Cuerpo
              de Defensa. Kafka Hibino es un hombre de 32 años que trabaja en "Monster Sweeper", pero que anteriormente aspiraba a trabajar
               en el Cuerpo de Defensa, pero se rindió con el paso de los años, de hecho, había hecho una promesa en su niñez con su amiga 
               de la infancia de entrar al cuerpo y combatir juntos, pero en este punto, el ya lo veía imposible. La vida de Kafka cambia
                cuando un nuevo chico llega al Monster Sweeper, Reno Ichikawa, quién tiene la intención de trabajar en ese lugar para adquirir 
                experiencia con los kaijuu y entrar en el Cuerpo de Defensa. Luego de su primer trabajo junto a Reno, quién motiva a Kafka
                 a entrar en el Cuerpo de Defensa, Kafka decide retomar su sueño y cumplir su promesa, hasta que ambos son atacados por un kaijuu
                  residual y terminan en el hospital. En ese momento, un kaijuu pequeño y volador aparece y se mete en el cuerpo de Kafka por su 
                  boca, otorgándole a este la capacidad de transformarse en un kaijuu. Ahora, Kafka, quién es conocido públicamente en su forma
                   kaijuu como el "Kaijuu No. 8" (debido a ser el octavo kaijuu en aparecer en el año), deberá evitar a toda costa revelar su 
                   identidad de kaijuu si quiere cumplir su sueño y cumplir su promesa.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );  
}
