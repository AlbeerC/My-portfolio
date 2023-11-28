import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
// Components
import Navbar from './components/Navbar/Navbar'
import MainLayout from './components/MainLayout/MainLayout'
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainLayout /> }/>
          <Route path='/project/:id' element={<ProjectsContainer /> }/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
