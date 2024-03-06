import React, { useContext } from "react";
import { useCart} from "../../Context/CartContext";
import { Link } from "react-router-dom";
const CartView = () => {
    const { cart, total, removeProduct } = useCart();

    return (
        <>
            <div>
                <section>
                    {cart.map((item) => (
                        <div key={item.id} style={{ width: '100%', display: "flex", justifyContent: 'space-around' }}>
                            <h3>{item.name}</h3>
                            <h4>Precio Unitario: ${item.price}</h4>
                            <h4>Cantidad: {item.quantity}</h4>
                            <h4>Subtotal: ${item.subTotal}</h4>
                            <button onClick={() => removeProduct(item.id)}>Remover</button>
                        </div>
                    ))}
                </section>
                <section>
                    <h5>Total ${total}</h5>
                </section>

            </div>
            <div><Link to='/checkout'></Link></div>

        </>
    )
}
export default CartView