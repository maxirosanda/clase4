import { useNavigate } from 'react-router'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { ShoppingBasket } from "lucide-react"



function ItemDetail ({product}) {

    const navigate = useNavigate()

    const navigateProductDetail = () => {

        navigate(`/product-detail/${product.id}`)
    }

    return (
        <div className="itemDetail">
            <h3 className='itemDetail-title'>{product.title}</h3>
            <p className='itemDetail-description'>{product.description}</p>
            <ItemCount stock={product.stock}/>
            <span>{product.price} $ ARG</span>
            <div className='itemDetail-buttons'>
                <ButtonPrimary>
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