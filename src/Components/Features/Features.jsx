import React from 'react'
import { Link } from 'react-router-dom'

export default function Features() {
    return <>
        <div className="container-xxl py-5">
            <div className="container py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-muted mt-5 text-uppercase">Features</h6>
                    <h1 className="mb-5">Key Features of N.C Logistics:</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-danger mb-1">Comprehensive Shipping Solutions</h5>

                            </div>
                            <div className="p-4 pt-0">
                                <p>N.C Logistics offers a wide range
                                    of shipping solutions tailored to meet the diverse needs of its customers.
                                    Whether you require transportation for a single container or a large-scale
                                    shipment, N.C Logistics can handle it all. Their services extend to
                                    delivering cargo to any country in the world, ensuring global connectivity.
                                </p>

                                <Link className="btn-slide mt-2" to="/contact"><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-danger mb-1"> Seamless International Logistics</h5>

                            </div>
                            <div className="p-4 pt-0">
                                <p>N.C Logistics boasts a robust global
                                    network of partners and agents, allowing for seamless coordination and
                                    logistics management across borders. This extensive network enables N.C
                                    l to streamline the shipping process, ensuring timely and secure delivery
                                    of goods to their destinations.
                                </p>

                                <Link className="btn-slide mt-2" to="/contact"><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-danger mb-1">Multi-Modal Transport</h5>

                            </div>
                            <div className="p-4 pt-0">
                                <p>Recognizing the importance of flexibility in
                                    the logistics industry, N.C Logistics provides both sea and air freight
                                    options. Depending on the urgency and nature of the cargo, customers can
                                    choose the most suitable mode of transport. By offering multi-modal
                                    transport solutions, N.C Logistics ensures efficient and cost-effective
                                    shipping services.
                                </p>

                                <Link className="btn-slide mt-2" to="/contact"><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-danger mb-1">State-of-the-Art Infrastructure</h5>

                            </div>
                            <div className="p-4 pt-0">
                                <p>N.C. Logistics has invested
                                    significantly in modern infrastructure and advanced technologies to
                                    optimize its operations. Equipped with state-of-the-art handling facilities,
                                    Page 3 of 17
                                    cutting-edge tracking systems, and secure warehousing solutions, Nile
                                    Cargo guarantees the safe handling and storage of your cargo throughout
                                    its journey.
                                </p>

                                <Link className="btn-slide mt-2" to="/contact"><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-danger mb-1"> Customized Services</h5>

                            </div>
                            <div className="p-4 pt-0">
                                <p>N.C Logistics understands that each shipment is
                                    unique, and therefore, offers personalized services tailored to specific
                                    customer requirements. Their experienced team of logistics professionals
                                    collaborates closely with clients to design customized shipping solutions,
                                    ensuring maximum efficiency and satisfaction
                                </p>

                                <Link className="btn-slide mt-2" to="/contact"><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-danger mb-1">Compliance and Security</h5>

                            </div>
                            <div className="p-4 pt-0">
                                <p>Complying with international regulations
                                    and ensuring the highest standards of security are top priorities for N.C
                                    Logistics. The company adheres to all relevant industry regulations and
                                    employs stringent security measures to safeguard cargo from any potential
                                    risks.
                                </p>

                                <Link className="btn-slide mt-2" to="/contact"><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="price-item">
                            <div className="border-bottom p-4 mb-4">
                                <h5 className="text-danger mb-1"> Customer Support</h5>

                            </div>
                            <div className="p-4 pt-0">
                                <p>N.C Logistics prides itself on delivering exceptional
                                    customer service. Their dedicated support team is available round the
                                    clock to address any queries, provide real-time updates, and assist with
                                    any concerns throughout the shipping process.
                                </p>

                                <Link className="btn-slide mt-2" to="/contact"><i className="fa fa-arrow-right"></i><span >Order Now</span></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
