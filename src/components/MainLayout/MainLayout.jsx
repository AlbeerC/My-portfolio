import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import ProjectsList from '../ProjectsList/ProjectsList'
import Stats from '../Stats/Stats'
import Contact from '../Contact/Contact'

function MainLayout() {
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
