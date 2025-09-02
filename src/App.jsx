import Header from './components/Header';
import Accueil from './components/Accueil';
import Companies from './components/Companies';
import Competences from './components/Competences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <Header />
      <Accueil />
      <Companies />
      <Experiences />
      <Formations />
      <Projects />
      <Competences />
      <Contact />
      <Analytics />
    </>
  );
};

export default App;
