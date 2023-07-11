import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-info" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link  text-info " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info" to="/product">Product</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-info" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-info" href="#">Action</a></li>
                                <li><a className="dropdown-item text-info" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider text-info" /></li>
                                <li><a className="dropdown-item text-info" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-info" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2 text-info" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-info" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header