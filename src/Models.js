import './Models.css';
import React, { useEffect, useRef, useState } from 'react';

// Función para importar todas las imágenes
function importAll(r) {
    return r.keys().map(r);
}

// Importar imágenes
const images = importAll(require.context('./assets/Cars', false, /\.(png|jpe?g|svg)$/));

function Models() {
    const [isVisible, setIsVisible] = useState(false);
    const modelsRef = useRef(null);

    const handleObserver = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true); // Activa la visibilidad
            } else {
                setIsVisible(false); // Desactiva la visibilidad si se sale del viewport
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, { threshold: 0.1 });
        if (modelsRef.current) {
            observer.observe(modelsRef.current);
        }

        return () => {
            if (modelsRef.current) {
                observer.unobserve(modelsRef.current);
            }
        };
    }, []);

    const coches = images.map((imagen, index) => ({
        imagen: imagen,
        descripcion: `Modelo ${index + 1} `
    }));

    return (
        <div 
            className={`car-models ${isVisible ? 'visible' : ''}`} 
            ref={modelsRef} 
            id="models"
        >
            <h2>Modelos</h2>
            <div className="models">
                {coches.map((coche, index) => (
                    <div key={index} className={`model-item ${isVisible ? 'visible' : ''}`}>
                        <img src={coche.imagen} alt={`Modelo ${index + 1}`} />
                        <p>{coche.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Models;
