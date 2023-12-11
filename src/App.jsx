import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
// Components
import Navbar from './components/Navbar/Navbar'
import MainLayout from './components/MainLayout/MainLayout'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainLayout /> } />
          <Route path='/project/:id' element={<ProjectsContainer /> }/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
