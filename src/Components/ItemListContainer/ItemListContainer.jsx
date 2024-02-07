import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true);
    /*    getProducts()
         .then((resp) => {
           if (category) {
             const productsFilter = resp.filter(product => product.category === category);
             setProducts(productsFilter);
             setIsLoading(false);
           } else {
             setProducts(resp);
             setIsLoading(false);
           }
         })
       .catch((error) => console.log(error)); 
    */
    const prodCollection = collection(db, 'products')

    getDocs(prodCollection)
      .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
       const fields = doc.data() 
        return { id: doc.id, ...fields }
      })

        setProducts(productsAdapted)

      })
      .catch((error) => console.log(error)); 

 

  }, [category]);

  return (
    <>
      <div> {greeting} </div>
      {isLoading ? <div className="fs-3 text-center p-3"> Cargando productos, gracias por la paciencia :)
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
          </div>
        </div> </div> : <ItemList products={products} />}
    </>
  );
};
