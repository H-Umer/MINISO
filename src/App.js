
import './App.css';
import Cards from './components/Cards';
import Cards1 from './components/Cards1';
import Cards2 from './components/Cards2';
import Cards3 from './components/Cards3';
import Cards4 from './components/Cards4';
import Cards5 from './components/Cards5';
import Cards6 from './components/Cards6';
import Footer from './components/Footer';
import Heading1 from './components/Heading1';
import Heading2 from './components/Heading2';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import XCards from './components/X-Cards';

function App() {
  return (
    <div >
      <Navbar/>
      <Slider/>
      <Cards/>
      <Heading1/>
      <Cards1/>
      <Cards2/>
      <Cards3/>
      <Cards4/>
      <Cards5/>
      <Cards6/>
      <XCards/> 
      <Heading2/>
      <Footer/>
    </div>
  );
}

export default App;
