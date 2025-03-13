// Home.jsx
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
// Importamos los iconos de Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faStore, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


function Home() {
  // Estados para controlar las dimensiones del rectángulo
  const rectangleWidth = 600;
  const rectangleHeight = 400;
  const navigate = useNavigate();

  // Funciones para navegar a diferentes componentes
  const navigateToMenu = () => {
    navigate("/menu");
  };

  const navigateToStores = () => {
    navigate("/stores");
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {/* Rectángulo central */}
      <Container className="d-flex justify-content-center align-items-center h-100">
        <div 
          className="center-rectangle"
          style={{
            width: `${rectangleWidth}px`,
            height: `${rectangleHeight}px`
          }}
        >
          <h2 className="mb-4">Welcome to Dashboard</h2>
          
          {/* Contenedor para los botones en horizontal */}
          <div className="icon-buttons-container">
            <button 
              className="icon-button" 
              onClick={navigateToMenu}
              title="Menu"
            >
              <FontAwesomeIcon icon= {faUtensils} size="4x" />
              <span>Menu</span>
            </button>
            
            <button 
              className="icon-button" 
              onClick={navigateToStores}
              title="Stores"
            >
              <FontAwesomeIcon icon={faStore} size="4x" />
              <span>Stores</span>
            </button>
            
            <button 
              className="icon-button" 
              onClick={navigateToCart}
              title="Cart"
            >
              <FontAwesomeIcon icon={faShoppingCart} size="4x" />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;


