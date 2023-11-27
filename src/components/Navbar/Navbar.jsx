import './Navbar.scss'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

function Navbar () {
    const [showMenu, setShowMenu] = useState(false)

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <div className="nav-mobile">
                <Link to='/'><h1>Mi portfolio</h1></Link>
                <button onClick={handleToggle}><FaBars className='hide toggle'/></button>
            </div>
            <nav className={showMenu ? 'show' : 'hide'}>
                <ul>
                    <li><Link className='active'>Inicio</Link></li>
                    <li><Link>Sobre mi</Link></li>
                    <li><Link>Proyectos</Link></li>
                    <li><Link>Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar