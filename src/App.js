
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import BoxTravel from './components/BoxTravel';
import Prom from './components/Prom';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(hotelbackground.jpeg)`,
      width: '100%',
      height: '100%',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -1,  
      
    }}>
      <Navbar />
      <Header />  
  
      
      <BoxTravel /> <br />
      <Prom /> <br />
      <Contact />
     
   
      <Footer />
    </div>
  );
}

export default App;
