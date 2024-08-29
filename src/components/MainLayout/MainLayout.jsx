import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import ProjectsList from '../ProjectsList/ProjectsList'
import Stats from '../Stats/Stats'
import Contact from '../Contact/Contact'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react'

function MainLayout() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ProjectsList />
      <Stats />
      <Contact />
    </main>
  );
}

export default MainLayout;
