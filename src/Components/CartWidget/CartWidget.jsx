import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import CartView from "../CartView/CartView";

export const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div>
            <div>
                <button className="btn btn-outline-dark"  data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <FaShoppingCart size={22} />
                    {totalQuantity}
                </button>
            </div>
            <div style={{ width: 100 }}>
                <div className="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="card card-body" style={{ width: 100 }}>
                        <CartView />
                    </div>
                </div>
            </div>
        </div>
    )
};
{/* <button type="button" className="btn btn-outline-dark">
    <FaShoppingCart size={22} />
    {totalQuantity}
    <CartView />
    {totalQuantity}
</button> */}