import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Stats from '../Stats/Stats';
import Contact from '../Contact/Contact';

function MainLayout() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Contact />
    </main>
  );
}

export default MainLayout;
