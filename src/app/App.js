import './App.css';
import { NavBar } from '../components/navBar/NavBar'
import { About } from '../components/about/About';
import { useState } from 'react';
import { Projects } from '../components/projects/Projects';
import { Skills } from '../components/about/skills/Skills';
import { Contact } from '../components/contact/Contact';
import { Footer } from '../components/footer/Footer';

function App() {
  const [visibility, setVisibility] = useState('');

  return (
    <>
      <About setVisibility={setVisibility} />
      <NavBar visibility={visibility}/>
      <Projects setVisibility={setVisibility} />
      <Skills setVisibility={setVisibility} />
      <Contact setVisibility={setVisibility} />  
      <Footer />   
   </>
  );
}

export default App;
