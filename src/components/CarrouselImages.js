import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Spinner } from 'react-bootstrap';
import "../styles/carrousel.css";

function CarouselImages() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Categorías para las imágenes
    const categories = ["food", "restaurant", "cuisine"];

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                
                // Usando la API de Unsplash para obtener imágenes
                // Nota: En producción, deberías usar tu propia clave API
                const promises = categories.map(category => 
                    fetch(`https://api.unsplash.com/photos/random?query=${category}&count=1&client_id=YOUR_UNSPLASH_ACCESS_KEY`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                );
                
                // Como alternativa, usaremos URLs de imágenes fijas para este ejemplo
                // En un entorno real, descomenta el código anterior y usa tu clave API
                const mockImages = [
                    {
                        id: "1",
                        urls: { regular: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop" },
                        alt_description: "Delicious food plate",
                        user: { name: "Food Photographer" },
                        description: "Gourmet meal with fresh ingredients"
                    },
                    {
                        id: "2",
                        urls: { regular: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop" },
                        alt_description: "Restaurant interior",
                        user: { name: "Restaurant Photographer" },
                        description: "Elegant restaurant setting with ambient lighting"
                    },
                    {
                        id: "3",
                        urls: { regular: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&auto=format&fit=crop" },
                        alt_description: "Cuisine variety",
                        user: { name: "Cuisine Photographer" },
                        description: "Selection of fresh and colorful dishes"
                    }
                ];
                
                setImages(mockImages);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching images:", error);
                setError("Failed to load images. Please try again later.");
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center carousel-container">
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="d-flex justify-content-center align-items-center carousel-container">
                <div className="error-message">
                    <h3>Oops!</h3>
                    <p>{error}</p>
                </div>
            </Container>
        );
    }

    return (
        <Container className="carousel-container">
            <h2 className="carousel-title">Featured Images</h2>
            <Carousel fade interval={3000} className="custom-carousel">
                {images.map((image) => (
                    <Carousel.Item key={image.id}>
                        <div 
                            className="carousel-image"
                            style={{
                                backgroundImage: `url(${image.urls.regular})`,
                            }}
                        >
                        </div>
                        <Carousel.Caption>
                            <h3>{image.alt_description}</h3>
                            <p>{image.description || "Beautiful food photography"}</p>
                            <small>Photo by {image.user.name}</small>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default CarouselImages;
