import { useContext,useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"

function Cart () {

    const {cart} = useContext(CartContext)

    const [products,setProducts] = useState([])

    useEffect(()=>{
        ( async()=>{
            try {
                const response = await fetch('/products.json')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        })()

    },[])


    return (
        <div>
            <p>carrito</p>
            {cart.map(cartProduct =>{
                const dataProduct = products.find(product => product.id === cartProduct.id )
                return <div key={cartProduct.id}>
                            <h3>{dataProduct?.title}</h3>
                            <span>{dataProduct?.price} $ ARG</span>
                            <span>Cantidad: {cartProduct?.quantity}</span>
                       </div>
            })}
        </div>
    )
}

export default Cart