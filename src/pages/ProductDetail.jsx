import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { useParams } from "react-router";
import { app } from "../firebaseConfig";


function ProductDetail () {

    const {productId} = useParams()
    const [product,setProduct] = useState({})

    useEffect(()=>{
        (async ()=>{
            try {
                const db = getFirestore(app);
                const productCollection = doc(db, 'products',productId);
                const productSnapshot = await getDoc(productCollection)
                const productDb = {id:productCollection.id,...productSnapshot.data()}
                setProduct(productDb)
            } catch (error) {
                console.log(error)
            }
        })()

    },[])


    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail