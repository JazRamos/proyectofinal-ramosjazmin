import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la mejor librería de alguna galaxia: Librería Arcoíris!"} />} />
        <Route path="/category/:category" element={<ItemListContainer greeting={"Librería Arcoíris"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>

  )
}