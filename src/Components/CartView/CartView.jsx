import React, { useContext } from "react";
import { CartContext} from "../../Context/CartContext";

const CartView = () => {
    const { cart, total, removeProduct } = useContext(CartContext);

    return (
        <>
            <div>
                <h1>CART</h1>
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
                    <h1>Total ${total}</h1>
                </section>

            </div>


        </>
    )
}
export default CartView