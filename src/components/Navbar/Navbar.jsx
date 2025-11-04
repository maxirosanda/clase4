import { NavLink } from 'react-router'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'


function Navbar (){
    return (
                <div className='navbar-container'>
                    <img className='navbar-icon' src='./src/assets/trash-icon.png'/>
                    <nav className='navbar'>
                        
                        <ul className='links'>
                            <li className='link'>Categorias</li>
                            <li className='link'><NavLink to="/contact">Contactos</NavLink></li>
                        </ul>
                        <CartWidget/>
                    </nav>
                </div>
    )
}

export default Navbar