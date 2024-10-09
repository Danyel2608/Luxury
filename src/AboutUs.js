import './AboutUs.css';
import Link1 from "./assets/LINKS/LINK1.jpg";
import Link2 from "./assets/LINKS/LINK2.jpg";
import Link3 from "./assets/LINKS/LINK3.jpg";

function AboutUs() {
    return (
        <div className="about-us" id='discover'>
            <h2>Discover More About Luxury</h2>
            <div className="links">
                <div className="link1">
                    <img src={Link1} alt="links1" />
                    <h3>LINK 1</h3>
                </div>
                <div className="link2">
                    <img src={Link2} alt="links2" />
                    <h3>LINK 2</h3>
                </div>
                <div className="link3">
                    <img src={Link3} alt="links3" />
                    <h3>LINK 3</h3>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
