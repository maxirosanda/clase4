import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
import { useParams } from "react-router";
import { app } from "../firebaseConfig";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function ProductDetail () {

    const {productId} = useParams()
    const [product,setProduct] = useState({})
    const [isLoadingProduct,setLoadingProduct] = useState(true)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
                    console.log(user.accessToken)
        if(user.accessToken === ""){
            navigate("/login")
        }
    },[])


    useEffect(()=>{
        (async ()=>{
            try {
                const db = getFirestore(app);
                const productCollection = doc(db, 'products',productId);
                const productSnapshot = await getDoc(productCollection)
                const productDb = {id:productSnapshot.id,...productSnapshot.data()}
                setProduct(productDb)
            } catch (error) {
                console.log(error)
            }
        })()

    },[])

    useEffect(()=>{
        if(product.title) {
            setTimeout(()=>{
                setLoadingProduct(false)
            },600)
        }
    },[product])


    if(isLoadingProduct) return <Loading loading={isLoadingProduct}/>


    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail