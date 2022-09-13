import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
export const OffCanvas_3 = () => {
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
        La historia tiene lugar en un mundo donde el 80% de la población ha desarrollado «dones», 
          surgiendo así héroes y villanos. Entre el 20% de personas sin dones, se encuentra Izuku Midoriya,
          cuyo mayor deseo es poder estudiar en la U.A. y convertirse en un héroe como su ídolo All Might. Un día, tras conocer personalmente a 
          All Might, este le ofrece heredar sus poderes al ver su gran determinación a pesar de haber nacido sin don. Midoriya accede y empieza 
          a estudiar en la U.A, donde hace nuevos amigos, conoce otros héroes profesionales, aprende a dominar sus poderes y se enfrenta a auténticos
          villanos.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );  
}
