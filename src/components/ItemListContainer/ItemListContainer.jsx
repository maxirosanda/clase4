import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/itemDetail'
import './ItemListContainer.css'
import { app } from '../../firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Loading from '../Loading/Loading';

function ItemListContainer () {

    const [products,setProducts] = useState([])
    const [isLoadingProducts,setLoadingProducts] = useState(true)


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

    useEffect(()=>{
        if(products.length !== 0) {
            setTimeout(()=>{
                setLoadingProducts(false)
            },600)
        }
    },[products])


    if(isLoadingProducts) return <Loading loading={isLoadingProducts}/>


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