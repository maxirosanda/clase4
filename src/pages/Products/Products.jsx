import './Products.css'
import { useContext, useEffect } from "react"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { ThemeContext } from "../../context/ThemeContent"
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router'


function Products () {

    const {dark} = useContext(ThemeContext)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
                    console.log(user.accessToken)
        if(user.accessToken === ""){
            navigate("/login")
        }
    },[])

    return (
        <div className={dark ? "dark" : "light"}>
            <ItemListContainer/>
        </div>
    )
}

export default Products