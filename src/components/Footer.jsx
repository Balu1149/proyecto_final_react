import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#484848" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Nuestras otras redes sociales:</span>
        </div>

        <div>
          <a
            href="https://www.twitch.tv/ryodancomiqueria"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="twitch" />
          </a>
          <a
            href="https://www.instagram.com/ryodan.comiqueria/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon fas icon="book-open" className="me-3" />
                Ryodan-Comiquería
              </h6>
              <p>
                Comiqueria Online Chilena 🇯🇵📚🇨🇱 Compra seguro, recibe rápido 🚛{" "}
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Chile, CL
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ryodan@comiqueria.cl
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

      <div
        className="text-center text-light p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a
          className="text-light"
          href="https://www.instagram.com/ryodan.comiqueria/"
        >
          Ryodan-Comiquería
        </a>
      </div>
    </MDBFooter>
  );
};
