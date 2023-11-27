import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'

function MainLayout() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
}

export default MainLayout;
