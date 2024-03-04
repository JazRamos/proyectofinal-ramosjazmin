import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import CartView from "../CartView/CartView";

export const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div><button type="button" className="btn btn-outline-dark">
            <FaShoppingCart size={22} />
            <CartView/>
            {totalQuantity}</button>
        
        </div>
    )
};

