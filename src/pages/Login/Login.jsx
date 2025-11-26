import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/UserContext';

export default function Login () {

    const auth = getAuth();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const {saveUser} = useContext(UserContext)

    const handleLogin = () =>{
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    saveUser(user.email,user.accessToken)
                    navigate("/")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode)
                    console.log(errorMessage)
                });
    }

    return <div className='login'>
                <div className='login-content'>
                               <input 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            className='login-input' 
                            type="text" 
                            placeholder="Ingrese Email"
                    />
                    <input  value={password} 
                            onChange={(e)=> setPassword(e.target.value)} 
                            className='login-input' 
                            type="password" 
                            placeholder="Ingrese contrasena"
                    />
                    <button 
                        onClick={handleLogin} 
                        className='login-button'>
                        Ingresar
                    </button>
                </div>
            </div>
}