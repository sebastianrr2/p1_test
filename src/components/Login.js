import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css"; 
import { useNavigate } from "react-router-dom";
import image_login from "../assets/login_image.jpg";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    // Validar contraseña
    if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Login validado con:", { userName, password });
      setIsSubmitted(true);

      navigate("/home");
      // Aquí puedes agregar la lógica para autenticar al usuario
    }
  };


  return (
    <div className="login-container">
      <Container fluid className="h-100 p-0">
        <Row className="h-100 g-0">
          {/* Columna izquierda con imagen */}
          <Col md={6} className="p-0 login-image-column">
            <img 
              src= {image_login}
              alt="Login" 
              className="login-image"
            />
          </Col>
          
          {/* Columna derecha con formulario */}
          <Col md={6} className="d-flex align-items-center justify-content-center login-form-column">
            <div className="login-form-container">
              <h2 className="text-center mb-4">Log in</h2>
              
              {isSubmitted && (
                <Alert variant="success">
                  Inicio de sesión exitoso
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">

                  <Form.Control
                  placeholder="Username"
                    type="email"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    isInvalid={!!errors.email}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formPassword">
                  <div className="position-relative">
                    <Form.Control
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      isInvalid={!!errors.password}
                      required
                    />
                  </div>
                </Form.Group>
                {/* Forgot Password Link */}
                <div className="text-end mb-3">
                  <a href="/home" className="forgot-password-link" onClick={(e) => e.preventDefault()}>
                    Forgot Password?
                  </a>
                </div>
                
                <Button variant="primary" type="submit" className="w-100">
                  Log in
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

