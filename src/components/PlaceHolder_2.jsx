import React from 'react'
import Card from 'react-bootstrap/Card';
import { OffCanvas_3 } from './OffCanvas_3';
import { OffCanvas_4 } from './OffCanvas_4';

export const PlaceHolder_2 = () => {
  return (
<div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <OffCanvas_3/>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <OffCanvas_4/>
        </Card.Body>

      </Card>
    </div>  )
}
