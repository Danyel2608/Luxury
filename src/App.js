import AboutUs from './AboutUs';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Luxury from './Luxury';
import Models from './Models';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Luxury></Luxury>
      <Resume></Resume>
      <Models></Models>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
