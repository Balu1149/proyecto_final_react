import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


export const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#484848' }}>
      
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' >
        <div className='me-5 d-none d-lg-block'>
          <span>Nuestras otras redes sociales:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.instagram.com/ryodan.comiqueria/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon fas icon="book-open" className="me-3" />
                Ryodan-Comiquería
              </h6>
              <p>
              Comiqueria Online Chilena 🇯🇵📚🇨🇱
Compra seguro, recibe rápido 🚛              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  a
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  b
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  c
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  d
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Otros links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Inicio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Productos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Nosotros
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Carrito
                </a>
              </p>
              <Nav><Nav.Link to="/shopping_cart" as={NavLink}>
              <p>
                <a href='#!' className='text-reset'>
                  Carrito
                </a>
              </p>
              </Nav.Link></Nav>
              
            </MDBCol> */}

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Chile, CL
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-light' href='https://www.instagram.com/ryodan.comiqueria/'>
          Ryodan-Comiquería
        </a>
      </div>
    </MDBFooter>
  );
};