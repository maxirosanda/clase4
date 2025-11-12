import './Products.css'
import { useContext } from "react"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { ThemeContext } from "../../context/ThemeContent"


function Products () {

    const {dark} = useContext(ThemeContext)
    return (
        <div className={dark ? "dark" : "light"}>
            <ItemListContainer/>
        </div>
    )
}

export default Products