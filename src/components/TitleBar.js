// TitleBar.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils} from "@fortawesome/free-solid-svg-icons";
import "../styles/titleBar.css";

function TitleBar({title}) {
  return (
    <div className="title-bar">
      <Container>
        <Row className="align-items-center">
          {/* Iconos a la izquierda */}
          <Col xs={3} className="icons-left">
            <div className="d-flex justify-content-start">
              <FontAwesomeIcon icon={faUtensils} className="title-icon" />
            </div>
          </Col>
          
          {/* Título centrado */}
          <Col xs={6} className="text-center">
            <h1 className="app-title">{title}</h1>
          </Col>
          
          {/* Icono a la derecha */}
          <Col xs={3} className="icons-right">
            <div className="d-flex justify-content-end">
              <FontAwesomeIcon icon={faUtensils} className="title-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TitleBar;
