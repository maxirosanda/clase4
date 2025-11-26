import { NavLink, useNavigate } from 'react-router'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import ButtonTheme from '../ButtonTheme/ButtonTheme'
import { getAuth, signOut } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


function Navbar (){

    const auth = getAuth();
    const navigate = useNavigate()
    const {deleteUser} = useContext(UserContext)

    const handleLogout = () => {
        signOut(auth).then(() => {
         deleteUser()
         navigate('/login')
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
                <div className='navbar-container'>
                    <img className='navbar-icon' src='./trash-icon.png'/>
                    <nav className='navbar'>
                        
                        <ul className='links'>
                            <li className='link'>Categorias</li>
                            <li className='link'><NavLink to="/">Inicio</NavLink></li>
                            <li className='link'><NavLink to="/contact">Contactos</NavLink></li>
                        </ul>
                        <CartWidget/>
                        <ButtonTheme/>
                        <button onClick={handleLogout}>Salir</button>
                    </nav>
                </div>
    )
}

export default Navbar