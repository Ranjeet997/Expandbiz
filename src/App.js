import './App.css';
import About_Us from './components/About_Us';
import Contact_Us from './components/Contact_Us';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div className="">
      {/* <Nav/> */}
      <Hero/>
      <About_Us/>
      <Home/>
      <Contact_Us/>
      <Footer/>
    </div>
  );
}

export default App;
