import './App.css';
import {useEffect} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AOS from 'aos';
import Breno from './components/Breno';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certs from './components/Certs';


function App() {
  useEffect(() => {
    document.title = 'Breno Ocanha'
    AOS.init();
  }, []);
  return(
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />[
      <Breno />
      <Skills />
      <Projects />
      <Certs />
      <Footer />
    </div>
  )
}

export default App;