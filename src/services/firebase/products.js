import { createContext, useEffect, useState } from "react";

import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";


    

const [products, setProducts] = useState([])
const [isLoading, setLoading] = useState(true)

const getProducts = (category) => {
    setLoading(true);
    const prodCollection = category
        ? query(collection(db, 'products'), where('category', '==', category))
        : collection(db, 'products')

    getDocs(prodCollection)
        .then(querySnapshot => {
            const prodList = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            })
            setProducts(prodList)
        })

        .catch((error) => alert('error'))
        .finally(() => {
            setLoading(false)
        })
}