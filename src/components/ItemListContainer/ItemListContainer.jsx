import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/itemDetail'
import './ItemListContainer.css'
import { app } from '../../firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function ItemListContainer () {

    const [products,setProducts] = useState([])


    useEffect(()=>{
        (async ()=>{
            try {
                const db = getFirestore(app);
                const productsCollection = collection(db, 'products');
                const productsSnapshot = await getDocs(productsCollection)
                
                const productsDb = productsSnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProducts(productsDb)
            } catch (error) {
                console.log(error)
            }
        })()

    },[])


    return (
        <div className='itemListContainer'>
            {
                products.map((product)=>{
                   return <ItemDetail key={product.id} product={product}/>
                })
            }
        </div>
    )
}

export default ItemListContainer