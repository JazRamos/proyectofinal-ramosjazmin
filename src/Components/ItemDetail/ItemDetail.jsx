import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ description, price, stock, name, img }) => {
    const onAdd = (items) => {
        alert(`Se agregó ${items} ${name} al carrito`)
    }

    return (
        <div className="border m-2">
            <div className="card w-25 p-3" >
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <img src={img} className="card-img-top w-100" alt="" />
                    <p className="card-text"> {description} </p>
                    <p>Precio: {price} </p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}
