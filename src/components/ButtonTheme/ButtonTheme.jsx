import './ButtonTheme.css'
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContent"
import { Moon, Sun } from "lucide-react"


export default function ButtonTheme () {

    const {dark, changeTheme} = useContext(ThemeContext)

    return (
        <button className="btn"  onClick={changeTheme}>
            {dark ? <Moon color='white' /> : <Sun color='white' />}
        </button>
    )
}