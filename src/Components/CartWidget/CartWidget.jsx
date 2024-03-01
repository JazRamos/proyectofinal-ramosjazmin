import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";

export const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div><button type="button" className="btn btn-outline-dark">
            <FaShoppingCart size={22} />
            {totalQuantity}</button>
        
        </div>
    )
};

