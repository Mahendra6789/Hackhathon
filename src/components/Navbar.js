import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">PENSIONER DETAILS</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/About">About <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/uploadcertificate">Upload <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/Contact">Contact <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/SignIn">SignIn <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/SignUp">SignUp<span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        </>
    )
}
export default Navbar