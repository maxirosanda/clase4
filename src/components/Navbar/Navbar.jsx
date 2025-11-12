import { NavLink } from 'react-router'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import ButtonTheme from '../ButtonTheme/ButtonTheme'


function Navbar (){
    return (
                <div className='navbar-container'>
                    <img className='navbar-icon' src='./src/assets/trash-icon.png'/>
                    <nav className='navbar'>
                        
                        <ul className='links'>
                            <li className='link'>Categorias</li>
                            <li className='link'><NavLink to="/">Inicio</NavLink></li>
                            <li className='link'><NavLink to="/contact">Contactos</NavLink></li>
                        </ul>
                        <CartWidget/>
                        <ButtonTheme/>
                    </nav>
                </div>
    )
}

export default Navbar