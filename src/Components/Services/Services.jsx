import React from 'react'
import serv1 from '../../img/service-1.jpg'
import serv2 from '../../img/service-2.jpg'
import serv6 from '../../img/service-6.jpg'
import { Link } from 'react-router-dom'

export default function Services() {
  return <>
    <div className="container-xxl py-5">
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <div className="my-3 text-light">.</div>

          <h6 className="text-secondary text-uppercase">Our Services</h6>
          <h1 className="mb-5">Explore Our Services</h1>
          <p className='w-75 mx-auto'>N.C Logistics is a comprehensive service provider specializing in logistics
            operations in Egypt. We have a strong presence in handling a large volume of
            inbound shipments to Egypt, serving both VIP and SMB clients. Our dedicated team
            of logistics professionals is committed to facilitating the import and export processes
            for our clients, ensuring a smooth flow of inbound and outbound cargo transactions.
            We offer a variety of shipping modes, including air, sea, and road transportation to
            and from Egypt. With our extensive experience in import/export activities, including
            FCL, LCL, and air shipments, we provide competitive freight rates and ensure
            efficient handling of your cargo. We have established partnerships with a wide
            network of ocean carriers, offering a range of choices for shipping to and from major
            sea and air ports worldwide <br /> <span className='text-danger'>We offer a wide range of services in the field of international shipping and 
logistics.</span></p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serv1} alt="" />
              </div>
              <h4 className="mb-1">International freight forwarding</h4>
              <ul> 
                <li> Air freight.</li>
                <li>  Sea freight.</li>
                <li> Land freight.</li>
                </ul>
              <Link className="btn-slide mt-2" to="/freight"><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serv2} alt="" />
              </div>
              <h4 className="mb-3"> Custom clearance </h4>
              <p>Our company specializes in coordinating shipments for businesses....</p>
              <Link className="btn-slide mt-2" to='/custom'><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item p-4">
              <div className="overflow-hidden mb-4">
                <img className="img-fluid" src={serv6} alt="" />
              </div>
              <h4 className="mb-3">Insurance Services</h4>
              <p>N.C Logistics has a close working relationship with Major insurance Agencies.... </p>
              <Link className="btn-slide mt-2" to="/insurance"><i className="fa fa-arrow-right"></i><span>Read More</span></Link>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  </>
}
