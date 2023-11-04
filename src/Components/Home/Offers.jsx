import React from 'react'
import './Home.css'

import servv1 from '../../images/plane.jpg'
import servv2 from '../../images/WhatsApp Image 2023-10-25 at 15.50.41_5cc527f0.jpg'
import servv3 from '../../images/WhatsApp Image 2023-10-25 at 15.50.41_a67c1c95.jpg'
import { Link } from 'react-router-dom'
export default function Offers() {
  return <>
     <div className="bgg">
     <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h3 className="text-secondary text-uppercase">Our Services</h3>
          <h1 className="mb-5">WHAT WE OFFER</h1>
        </div>
        <div className="row g-4">
        
        <div className="col-md-4 p-5"> <Link to="freight">
            <div className='itemm position-relative '>
              <div className=" sora">
                <img src={servv1} className='w-100' alt="" />
              </div>
              <div className=" overlay  text-center pt-5">
               <p> <i className="fa fa-ship fs-2 text-light d-block"></i></p>
                <h3 className='text-light'>Freight Forwarding & Logistics</h3>

              </div>
            </div></Link>
          </div>
          
          <div className="col-md-4 p-5"> <Link to="custom">
            <div className='itemm position-relative '>
              <div className=" sora">
                <img src={servv2} className='w-100' alt="" />
              </div>
              <div className=" overlay  text-center pt-5">
               <p> <i className="fa fa-star fs-2 text-light d-block"></i></p>
                <h3 className='text-light'>Customs Clearance</h3>

              </div>
            </div></Link>
          </div>
          
          
          <div className="col-md-4 p-5"><Link to="insurance">
            <div className='itemm position-relative '>
              <div className=" sora">
                <img src={servv3} className='w-100' alt="" />
              </div>
              <div className=" overlay  text-center pt-5">
               <p> <i className="fa-regular fa-square-check fs-2 text-light d-block"></i></p>
                <h3 className='text-light'>Cargo Insurance</h3>

              </div>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
     </div>
  </>
}
