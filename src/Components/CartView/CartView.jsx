import React, { useContext } from "react";
import { CartContextProvider } from "../../Context/CartContext";

const CartView = () => {
    const { cart, total, removeProduct } = useContext(CartContextProvider);

    return (
        <>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
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
                </div>
            </div>
        </>
    )
}
export default CartView