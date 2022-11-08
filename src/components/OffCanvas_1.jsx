import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
export const OffCanvas_1 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow} variant="outline-light" >
        Ver más
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton closeVariant='white' style={{color:'white', background:"#7F0102", textAlign:"justify"}}>
          <Offcanvas.Title>Trama</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{color:'white', background:"#7F0102", textAlign:"justify"}}>
          <p>La trama se desarrolla en torno a la historia del linaje Joestar, 
          una poderosa familia de origen británico destinada a combatir fuerzas 
          sobrenaturales malvadas usando poderes adquiridos; la obra abarca varias
          generaciones de dicho linaje, las cuales son adaptadas en cada parte poniendo 
          un descendiente como protagonista, empezando con Jonathan en el año 1880. Las partes
          1 a 6 tienen una historia continua y lineal, mientras que las 7 y 8 ocurren en un universo
          alterno.</p>

          <p>El nombre «JoJo», presente en el título de la obra, consiste en un juego 
          de palabras compuesto por el nombre de los protagonistas de cada parte, 
          los cuales pueden abreviarse como «Jojo» y usarse a forma de apodo; sin 
          embargo, en las últimas partes de la obra se hacen juegos de palabras más
          complejos: por ejemplo, Josuke es un juego de palabras en japonés en que 
          la sílaba «suke» (助) se puede leer también como «jo», y el diminutivo de
          Giorno Giovana (Gio. Gio.) tiene una pronunciación bastante similar a «Jojo».
          Todos los Joestar se identifican porque tienen una marca de nacimiento en forma de estrella de cinco puntas.</p>

          <p>Los géneros que abarca se extienden por acción, aventura, sobrenatural,
          suspenso, comedia, tragedia, misterio y terror. Es quizás más conocida
          popularmente por su fenómeno Stand; la Parte 3: Stardust Crusaders y 
          sus personajes Dio y Jotaro Kujo; la interpretación expresiva de sus 
          personalidades orgullosas glamorosas; y sus cientos de referencias nominales 
          a la música popular occidental.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );  
}
