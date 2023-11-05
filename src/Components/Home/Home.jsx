import React from 'react'
import './Home.css'
import cars1 from '../../img/carousel-1.jpg'
import cars2 from '../../img/JetLogistics-etusivu-Hero-image-1920x1067.jpg'
import cars3 from '../../img/logistics-and-transport-ERP.jpg'
import who from '../../images/WhatsApp Image 2023-10-25 at 15.50.40_7a51996f.jpg'

import Offers from './Offers.jsx'
import Facts from './Facts.jsx'
import Contact from '../Contact/Contact.jsx'
import Member from './Member.jsx';
import Map from './Map.jsx'
import Services from '../Services/Services.jsx'
import { Link } from 'react-router-dom'




export default function Home() {

  return <>
    <div id="carouselExampleCaptions" className="carousel slide  " >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
      <div className="my-3 text-light">.</div>
        <div className="carousel-item active">
        

          <img src={cars1} className="msa7a d-block  w-100" alt="..." />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p" style={{ background: `rgba(6, 3, 21, 0.5)` }}>
            <div className="container">
              <div className="row justify-content-center state">
                <div className="col-10 col-lg-8 p-5">
                  <h3 className="text-danger text-uppercase mb-3 ">N.C LOGISTICS <p className='text-white ' >transport anything from anywhere</p></h3>
                  <h1 className="display-3 text-white  mb-4">#1 Place For Your <span className="text-danger">Logistics</span> Solution</h1>
                  <h4 className="fs-5 fw-medium text-white mb-4 pb-2">OCEAN TRANSPORTATION</h4>
                  <Link to="/freight" className="mb-5 btn btn-danger py-md-3 px-md-5 me-3 ">Read More</Link>
                  <Link to="/contact" className="mb-5 btn lon py-md-3 px-md-3 ">Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={cars2} className="msa7a d-block w-100" alt="..." />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: `rgba(6, 3, 21, 0.5)` }}>
            <div className="container">
              <div className="row justify-content-center state">
                <div className="col-10 col-lg-8 p-5 ">
                  <h3 className="text-danger text-uppercase mb-3 ">N.C LOGISTICS <p className='text-white ' >transport anything from anywhere</p></h3>
                  <h1 className="display-3 text-white  mb-4">#1 Place For Your <span className="text-danger">Transport</span> Solution</h1>
                  <h4 className="fs-5 fw-medium text-white mb-4 pb-2">TRUCK TRANSPORTATION</h4>
                  <Link to="/freight" className="mb-5 btn btn-danger py-md-3 px-md-5 me-3 ">Read More</Link>
                  <Link to="/contact" className="mb-5 btn lon py-md-3 px-md-5 ">Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={cars3} className="msa7a d-block w-100" alt="..." />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: `rgba(6, 3, 21, 0.5)` }}>
            <div className="container">
              <div className="row justify-content-center state">
                <div className="col-10 col-lg-8 p-5">
                  <h3 className="text-danger text-uppercase mb-3 ">N.C LOGISTICS <p className='text-white ' >transport anything from anywhere</p></h3>
                  <h1 className="display-3 text-white  mb-4">#1 Place For Your <span className="text-danger">Transport</span> Solution</h1>
                  <h4 className="fs-5 fw-medium text-white mb-4 pb-2">AIR TRANSPORTATION </h4>
                  <Link to="/freight" className="mb-5 btn btn-danger py-md-3 px-md-5 me-3 ">Read More</Link>
                  <Link to="/contact" className="mb-5 btn lon py-md-3 px-md-5 ">Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>





    <div className='bgg py-5 mt-5'>
    <div className="container my-5">
      <div className="text-center my-5">
        <h2 className='text-danger '>WHO WE ARE</h2>
      <h5>Safety with operational excellence is key to our performance</h5>
        <div className="row my-5">
          <div className="col-md-6 pt-5">
            <p className=' h3 text-muted mt-5 '>A cutting-edge shipping company based in Alexandria, Egypt. N.C
              logistics specializes in providing efficient and reliable cargo
              transportation services worldwide, both by sea and air. With a strong
              focus on customer satisfaction, NC logictics aims to become a leading
              player in the global logistics industry.
              Our commitment is to excellence is reflected in our ISO 9001 and ISO
              14100 Certificates, we firmly believe in the value of our people,
              leadership and technical expertise.</p>
          </div>
          <div className="col-md-6 p-5">
            <img src={who} className='w-100' alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  
    <Services />
    <Offers />
    <Facts />
    <Contact />
    <Map />
    <Member />


  </>
}
