

import React from "react";
import { Link } from "react-router-dom";

function Bootstrap() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">git 
        <div className="container-fluid">
          <Link className="navbar-brand" to="">tienda de plantas</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">plantas de interior</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">plantas de exterior</Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
    
              <button className="btn btn-outline-success" type="submit"> carrito </button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Bootstrap
