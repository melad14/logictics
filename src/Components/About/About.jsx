import React from 'react'

import img1 from '../../img/about.jpg'
import img2 from '../../img/feature.jpg'
import img3 from '../../img/team-1.jpg'
import img4 from '../../img/team-2.jpg'
import img5 from '../../img/team-3.jpg'
import img6 from '../../img/team-4.jpg'
import { Link } from 'react-router-dom'
export default function About() {
    return <>

        <div className="container overflow-hidden py-5 px-lg-0">
            <div className="my-5 text-light">.</div>
      
            <div className="text-center my-5"><h2 className='text-danger'>WHO WE ARE</h2>
                <p className=' h4 text-muted w-75 mx-auto'>A cutting-edge shipping company based in Alexandria, Egypt. N.C
                    logistics specializes in providing efficient and reliable cargo
                    transportation services worldwide, both by sea and air. With a strong
                    focus on customer satisfaction, Nile Cargo aims to become a leading
                    player in the global logistics industry.
                    Our commitment is to excellence is reflected in our ISO 9001 and ISO
                    14100 Certificates, we firmly believe in the value of our people,
                    leadership and technical expertise.</p>

            </div>
            <div className="container about py-5 px-lg-0">
                <div className="row g-5 mx-lg-0">
                    <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100 imagg">
                            <img className="position-absolute img-fluid w-100 h-100" src={img1} style={{ objectFit: 'cover' }} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className=" text-uppercase mb-3">About Us</h6>
                        <h1 className="mb-5 text-danger">Quick Transport and Logistics Solutions</h1>
                        <p className="mb-5">A simple call with our logistics specialists will ensure you choose the best
                            service according to your needs and destination</p>
                        <div className="row g-4 mb-5">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-globe fa-3x text-danger mb-3"></i>
                                <h5>Global Coverage</h5>
                                <p className="m-0">Shipments both export and import</p>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                <i className="fa fa-shipping-fast fa-3x text-danger mb-3"></i>
                                <h5>On Time Delivery</h5>
                                <p className="m-0">Door-to-Door rates and services available</p>
                            </div>
                        </div>
                        <Link to="/freight" className="btn btn-danger py-3 px-5">Explore More</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-lon text-uppercase mb-3">Some Facts</h6>
                        <h1 className="mb-5 text-danger">#1 Place To Manage All Of Your Shipments</h1>
                        <p className="mb-5">Managing and operating a diverse fleet that serves the international shipping sector
                            to and from all countries of the world with safety, sustainability, and customer</p>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-headphones fa-2x flex-shrink-0 bg-danger p-3 text-white"></i>
                            <div className="ps-4">
                                <h6>Call for any query!</h6>
                                <h3 className="text-danger m-0"> +2 01116031999</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-6">
                                <div className="bg-danger p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                    <p className="text-white mb-0">Happy Clients</p>
                                </div>
                                <div className="lon p-4 wow fadeIn" data-wow-delay="0.5s">
                                    <i className="fa fa-ship fa-2x text-white mb-3"></i>
                                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                    <p className="text-white mb-0">Complete Shipments</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                                    <i className="fa fa-star fa-2x text-white mb-3"></i>
                                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                                    <p className="text-white mb-0">Customer Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid overflow-hidden py-5 px-lg-0">
            <div className="container feature py-5 px-lg-0">
                <div className="row g-5 mx-lg-0">
                    <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-lon text-uppercase mb-3">Our Features</h6>
                        <h1 className="mb-5 text-danger">We Are Trusted Logistics Company</h1>
                        <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                            <i className="fa fa-globe text-danger fa-3x flex-shrink-0"></i>
                            <div className="ms-4">
                                <h5> Comprehensive Shipping Solutions</h5>
                                <p className="mb-0">N.C Logistics offers a wide range
                                    of shipping solutions tailored to meet the diverse needs of its customers.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-shipping-fast text-danger fa-3x flex-shrink-0"></i>
                            <div className="ms-4">
                                <h5>Seamless International Logistics</h5>
                                <p className="mb-0">N.C Logistics boasts a robust global
                                    network of partners and agents, allowing for seamless coordination and
                                    logistics management across borders</p>
                            </div>
                        </div>
                        <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                            <Link to="/contact" className="btn btn-danger py-3 px-5">Read More</Link>

                        </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100 imagg">
                            <img className="position-absolute img-fluid w-100 h-100" src={img2} style={{ objectFit: 'cover' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-lon text-uppercase">Our Team</h6>
                    <h1 className="mb-5 text-danger"> Team Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid" src={img3} alt="" />
                            </div>
                            <h5 className="mb-0">Farida Ibrahim</h5>
                            <p>Logistics Manger</p>
                            <div className="btn-slide mt-1">
                                <i className="fa fa-share"></i>
                                <span>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid" src={img4} alt="" />
                            </div>
                            <h5 className="mb-0">Hany Ramzy</h5>
                            <p>marketing Manger</p>
                            <div className="btn-slide mt-1">
                                <i className="fa fa-share"></i>
                                <span>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid" src={img5} alt="" />
                            </div>
                            <h5 className="mb-0">Hossan Shehata</h5>
                            <p>General Manger</p>
                            <div className="btn-slide mt-1">
                                <i className="fa fa-share"></i>
                                <span>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                        <div className="team-item p-4">
                            <div className="overflow-hidden mb-4">
                                <img className="img-fluid" src={img6} alt="" />
                            </div>
                            <h5 className="mb-0">Mina Habib</h5>
                            <p>Chair Of Board</p>
                            <div className="btn-slide mt-1">
                                <i className="fa fa-share"></i>
                                <span>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>
}
