import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {

  
  return <>
  <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '6rem'}}>
<div className="container py-5">
    <div className="row g-5">
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>5 Bastour st. floor 1 apt. 2 - Wabour Al Meyah, Bab Sharqi, 
Alexandria Governorate, Egypt</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>  +2034238500 </p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i> +2 01116031999 </p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@nclogictics.com</p>
            <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">RESOURCES</h4>
            <a target='blank' className="btn btn-link" href="https://www.wto.org/">WTO</a>
            <a target='blank' className="btn btn-link" href="http://www.wcoomd.org/">WCO</a>
            <a target='blank' className="btn btn-link" href="http://www.customs.gov.eg/">Egyptian Customs</a>
            <a target='blank' className="btn btn-link" href="http://www.tra.gov.eg/">NTRA</a>
            <a target='blank' className="btn btn-link" href="http://fiata.com/home.html">FIATA</a>
            <a target='blank' className="btn btn-link" href="http://www.eiffa.com/">EIFFA</a>
            <a target='blank' className="btn btn-link" href="http://www.goeic.gov.eg/">G.O.E.I.Cs</a>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <Link className="btn btn-link" to="about">About Us</Link>
            <Link className="btn btn-link" to="contact">Contact Us</Link>
            <Link className="btn btn-link" to="services">Our Services</Link>
            <Link className="btn btn-link" to="freight">Freight</Link>
            <Link className="btn btn-link" to="quality">Terms & Condition</Link>
            <Link className="btn btn-link" to="support">Support</Link>
        </div>
        <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>subscribe with us</p>
            <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                <button type="button" className="btn btn-danger py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
        </div>
    </div>
</div>
<div className="container">
    <div className="copyright">
        <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; N.C LOGISTICS All Right Reserved.
            </div>
           
        </div>
    </div>
</div>
</div>
  </>
}
