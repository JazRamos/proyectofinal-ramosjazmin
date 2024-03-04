import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import CartView from "./Components/CartView/CartView";


export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la mejor librería de alguna galaxia: Librería Arcoíris!"} />} />
          <Route path="/category/:category" element={<ItemListContainer greeting={"Librería Arcoíris"} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartView />} />
          {/* <Route path='/checkout' element={<Checkout />} /> */}
        </Routes>
      </CartContextProvider>
    </BrowserRouter>

  )
}