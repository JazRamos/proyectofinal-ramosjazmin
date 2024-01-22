import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
    return (
        <div className="card w-25" >
            <div className="card-body ">
                <h5 className="card-header">{name}</h5>
                <img src={img} className="w-100" alt="" />
                <p className="card-text"> {description} </p>
                <Link to={`/item/${id}`}>
                    <button className="btn btn-outline-success">Detalles</button>
                </Link>
            </div>
        </div>
    );
};
