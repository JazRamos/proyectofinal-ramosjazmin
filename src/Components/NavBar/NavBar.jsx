import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid justify-content-center">
        <div className="nav" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/"}>
              <button className="btn btn-outline-dark mx-2">Home</button>
            </Link>
            <Link to={"/category/lapiceras"}>
              <button className="btn btn-outline-dark mx-2">Lapiceras</button>
            </Link>
            <Link to={"/category/cuadernos"}>
              <button className="btn btn-outline-dark mx-2">Cuadernos</button>
            </Link>
            <Link to={"/category/resaltadores"}>
              <button className="btn btn-outline-dark mx-2">Resaltadores</button>
            </Link>
            <Link to={"/category/lapices"}>
              <button className="btn btn-outline-dark mx-2">Lapices</button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" d-flex ">
        <CartWidget />
        <p className="badge border border-light rounded-circle bg-danger p-1">2</p>
      </div>
    </nav>
  );
};
