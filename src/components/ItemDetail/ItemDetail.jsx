import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import './ItemDetail.css'
import { ShoppingBasket } from "lucide-react"


function ItemDetail ({product}) {
    return (
        <div className="itemDetail">
            <h3 className='itemDetail-title'>{product.title}</h3>
            <p className='itemDetail-description'>{product.description}</p>
            <span>{product.price} $ ARG</span>
            <ButtonPrimary>
                <ShoppingBasket />
                Carrito
            </ButtonPrimary>
        </div>
    )
}

export default ItemDetail