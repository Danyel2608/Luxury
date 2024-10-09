import './Resume.css';
import React, { useEffect, useRef, useState } from 'react';

function Resume() {
    const [isVisible, setIsVisible] = useState(false);
    const resumeRef = useRef(null);

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
        if (resumeRef.current) {
            observer.observe(resumeRef.current);
        }

        return () => {
            if (resumeRef.current) {
                observer.unobserve(resumeRef.current);
            }
        };
    }, []);

    return (
        <div 
            className={`resume ${isVisible ? 'visible' : ''}`} 
            ref={resumeRef} 
            id='description'
        >
            <div className="description"><h2>Description</h2></div>
            <div className="parraf">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eum doloribus cupiditate. Commodi tenetur doloremque assumenda, impedit, atque dignissimos repellendus laboriosam officia blanditiis minus beatae odio totam. Molestias, ex perspiciatis.</p>
            </div>
        </div>
    );
}

export default Resume;
