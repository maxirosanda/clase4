import { Link } from 'react-router'
import './CartWidget.css'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

function CartWidget () {

    const { totalQuantity } = useContext(CartContext)

    return (<Link to="/cart"  className='cartWidget'>
                <ShoppingCart className='shoppingCart' />
                <span className='counter'>
                    {totalQuantity}
                </span>
            </Link>)
}

export default CartWidget