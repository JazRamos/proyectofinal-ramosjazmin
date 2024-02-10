import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";

export const CartWidget = () => {
    const { totalProducts } = useCart()

    return (
        <div>
        <FaShoppingCart size={22} />
            {totalProducts}
        </div>
    )
};

