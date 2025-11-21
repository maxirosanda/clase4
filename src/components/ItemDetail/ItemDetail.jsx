import { useNavigate } from 'react-router'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { ShoppingBasket } from "lucide-react"
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContent'
import { CartContext } from '../../context/CartContext'
import useCount from '../../hooks/useCount'



function ItemDetail ({product}) {

    const navigate = useNavigate()
    const {dark} = useContext(ThemeContext)
    const {addCartProduct} = useContext(CartContext)

    const {count, less, add} = useCount({initia:1, stock:product.stock})

    const navigateProductDetail = () => {

        navigate(`/product-detail/${product.id}`)
    }

    const handleAddCartProduct = () => {
        const newCartProduct = {
            id: product.id,
            quantity:count
        }
        addCartProduct(newCartProduct)

    }



    return (
        <div className="itemDetail">
            <p className={`itemDetail-description ${dark ? "dark" : "light"}`}>{product.title}</p>
            <ItemCount count={count} less={less} add={add}/>
            <span>{product.price} $ ARG</span>
            <div className='itemDetail-buttons'>
                <ButtonPrimary onClick={handleAddCartProduct}>
                    <ShoppingBasket />
                    Carrito
                </ButtonPrimary>
                <ButtonPrimary onClick={navigateProductDetail} >
                    Detalle
                </ButtonPrimary>
            </div>
        </div>
    )
}

export default ItemDetail