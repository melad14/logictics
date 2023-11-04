import React from 'react'
import './Navbar.css'
import logo from '../../images/N.C.Logistics.png'

import { Link } from 'react-router-dom'

export default function   Navbar() {

 
  return <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0 mb-5">
        <Link to="/"className="navbar-brand mainn d-flex align-items-center px-4 px-lg-5">
        <img src={logo} alt="logo" className='logo' width={100} />
             </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link ">Home</Link>
                <Link to="about" className="nav-item nav-link">About</Link>
                <Link to="services" className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <Link  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Resources</Link>
                    <div className="dropdown-menu fade-up m-0">
                        <Link to="links"className="dropdown-item">Useful Links</Link>
                        <Link to="inco" className="dropdown-item">Inco Terms</Link>
                        <Link to="contspec" className="dropdown-item">Container Specifications</Link>
                      
                    </div>
                </div>
                <Link to="features" className="nav-item nav-link">Features</Link>
                <Link to="contact" className="nav-item nav-link">Contact</Link>
            </div>
            <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-phone text-danger me-3"></i> +2 01116031999</h4>
        </div>
    </nav>

  </>
}





