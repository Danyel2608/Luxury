import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id='contact'>
            <div className="footer-container">
                <div className="footer-brand">
                    <h1>Luxury</h1>
                    <p>Coches de lujo, experiencia sin igual</p>
                </div>

                {/* Navegación */}
                <div className="footer-links">
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="#about">Sobre Nosotros</a></li>
                        <li><a href="#models">Modelos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a href="#services">Servicios</a></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>Email: info@luxurycars.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                    <p>Dirección: Calle de los Lujo, Madrid, España</p>
                </div>

                {/* Redes Sociales */}
                <div className="footer-social">
                    <h3>Redes Sociales</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Luxury. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
