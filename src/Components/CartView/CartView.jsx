import React, { useContext } from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
const CartView = () => {
    const { cart, total, removeProduct } = useCart();

    return (
        <>
            <div>
                <section>
                    {cart.map((item) => (
                        <div key={item.id} style={{ width: '50%', display: "flex" }}>
                            <h5>{item.name}</h5>
                            <p className="fs-6">Precio Unitario: ${item.price}</p>
                            <p className="fs-6">Cantidad: {item.quantity}</p>
                            <p className="fs-6">Subtotal: ${item.subTotal}</p>
                            <button onClick={() => removeProduct(item.id)}>Remover</button>
                        </div>
                    ))}
                </section>
                <section>
                    <h5>Total ${total}</h5>
                </section>
                <div><Link to='/checkout'>
                    <button className="btn btn-outline-dark mx-2">Checkout</button></Link></div>
            </div>
            

        </>
    )
}
export default CartView