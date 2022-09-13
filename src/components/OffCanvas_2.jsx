import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
export const OffCanvas_2 = () => {
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
            <p>Saori Kido, directora de la fundación Kido, organiza un torneo entre los caballeros
            (El Torneo Galáctico) en el cual participan guerreros con poderosas armaduras y que son conocidos
            como los Caballeros de Bronce, quienes luchan no solo por motivos personales, sino también por la codiciada 
            y misteriosa Armadura Dorada.</p>

            <p>Mientras tanto en el Santuario de Athena en Grecia un joven aspirante a santo llamado Seiya combate contra su rival
            Casio para poder obtener la armadura de Pegaso. Al derrotarlo, Seiya logra obtener el título de Santo, no sin antes 
            ser advertido por el Patriarca de no usarla para beneficio personal sino en el nombre de la justicia. Esa misma noche 
            Seiya y Marin de Águila descansan en su hogar hasta que son atacados por sujetos comandados por Shaina de Ofiuco, maestra
            de Casio que intentan matarlo para arrebatarle su armadura. Seiya usa su armadura por primera vez y derrota a sus enemigos
            en segundos, además de destruir la máscara y ver el rostro de Shaina, lo cual según las reglas del Santuario está prohibido. 
            Shaina clama venganza jurando matar a Seiya por su osadía.</p>

            <p>De regreso en Japón, Seiya se encuentra con sus antiguos amigos, compañeros de orfanato en la niñez, 
            contra los cuales se verá obligado a combatir si decide participar en el torneo. Seiya acepta con el único objetivo de poder 
            encontrar a su hermana, aprovechando que el torneo es transmitido a nivel mundial. Su primer rival en el torneo es Geki de Osa
            Mayor a quien logra derrotar usando su astucia y técnicas como el Meteoro de Pegaso, el cual Jabu detectó por ser una variante
            de una técnica de puño que dispara más de cien golpes por segundo. Sin embargo su verdadera prueba es su combate contra Shiryū de 
            Dragón a quien logra derrotar con muchas complicaciones y quedando ambos al borde de la muerte. Luego del combate, Seiya reúne fuerzas
            y logra salvar a Shiryū al golpear el corazón del Dragón que se dibuja y desdibuja de su espalda gracias a su cosmos; Shiryū queda en
            deuda con él por haberle salvado la vida.</p>

            <p>En el torneo, que continúa sin más complicaciones, se revelan poderosos guerreros como Hyoga del Cisne. En el manga, él viaja desde
            Siberia para cumplir con la misión encomendada por el santuario: eliminar a todos por transgredir la ley del Patriarca, la cual dice que
            no pueden usar las armaduras para beneficio propio. Sin embargo, después de observar el combate de Seiya y Shiryū cambia su opinión acerca 
            de los caballeros. En el anime, él simplemente forma parte del torneo como combatiente, sin problemas para acabar con su oponente Ichi Santo
            de Hidra, y testigo del combate entre el Pegaso y el Dragón.</p>


El diseño del coliseo donde se disputa el torneo galáctico se inspira directamente en el Coliseo de Roma.
También destaca la aparición de un joven llamado Shun de Andrómeda quien a pesar de su apariencia tierna y débil logra ganar el primer encuentro a su oponente Jabu del Unicornio (quien había aplastado a su oponente Ban de León Menor y quebrado su armadura). Una vez dada la victoria a Shun el combate es interrumpido por la repentina aparición de un misterioso personaje dentro de la caja de la armadura dorada. Este resulta ser Ikki de Fénix, el hermano mayor de Shun quien supuestamente había muerto.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );  
}
