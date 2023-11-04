import React from 'react'
import cust from '../../images/plane.jpg'
import cust2 from '../../images/WhatsApp Image 2023-10-25 at 15.50.41_c4137f5f.jpg'
import cust3 from '../../images/WhatsApp Image 2023-10-25 at 15.50.41_cd3d6010.jpg'
import cust4 from '../../images/WhatsApp Image 2023-10-25 at 15.50.41_5cc527f0.jpg'
import { Link } from 'react-router-dom'
export default function Custom() {

    return <>
        <div className="container-xxl py-5">
            <div className=" my-5">
            <div className="my-5 text-light">.</div>

                <h2 className='text-danger h1 my-5'>Custom clearance</h2>
                <div className='row'>
                    <div className="col-md-3 p-2 imagg">
                        <img src={cust} alt="" className='w-100' />
                    </div>
                    <div className="col-md-3 p-2 imagg">
                        <img src={cust2} alt="" className='w-100' />
                    </div>
                    <div className="col-md-3 p-2 imagg">
                        <img src={cust3} alt="" className='w-100' />
                    </div>
                    <div className="col-md-3 p-2 imagg">
                        <img src={cust4} alt="" className='w-100' />
                    </div>


                </div>


            </div>
            <div className="container py-5">
                <div className='mb-5'>
                    <h2 className='text-danger'>Custom clearance</h2>
                    <h5 className='text-muted'>Our company specializes in coordinating shipments for businesses, ensuring that
                        goods are efficiently transported  <br />from the manufacturer or producer to their
                        intended market or final destination. We place utmost importance <br /> on maintaining
                        the integrity of our "terms of agreements" as we provide this service</h5>
                </div>
                <ul className='mb-5'>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Find the Most Competitive Clearance Rate</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'> ACI Registration Process</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Document Legalization  </h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Complete All Documents</h5>
                    </li>
                </ul>
                <hr />
                <hr />
                <div className='my-5'>
                    <i className="me-3  text-success  fa-regular fa-circle-check"></i>
                    <h5 className='text-muted d-inline'>There are some essential customs documents that must be provided to NC
                        Logistics to facilitate the customs clearance process. <br /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; The specific documents may
                        vary depending on the type and nature of the shipment <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and the destination
                        country. However, here are some general documents that may be required
                    </h5>
                </div>
                <ul>

                    <li className="my-4">
                        <h5 > 1- Commercial Invoice: This document contains details of the shipment, <br /> such as
                            the exported and imported goods, their values, and payment informatio</h5>
                    </li>

                    <li className="my-4">
                        <h5 > 2- Packing List: It contains a detailed list of all the goods in the shipment,
                            including quantities, sizes, and weights. </h5>
                    </li>

                    <li className="my-4">
                        <h5 > 3- Certificate of Origin: It verifies the country of origin of the goods. The
                            importing country may require this certificate <br /> to determine the goods' origin
                            and apply appropriate fees and restrictions.</h5>
                    </li>

                    <li className="my-4">
                        <h5 > 4- Bill of Lading: It is a document that establishes the contract between the
                            shipper and the carrier, <br /> and it contains  details of the shipment, its route, and
                            delivery terms</h5>
                    </li>

                    <li className="my-4">
                        <h5 > 5- Customs Declaration: It includes detailed information about the goods,<br />
                            including weight, value, origins, purposes, and intended use of the shipment</h5>
                    </li>

                </ul>

                <div className='my-5'>
                    <i className="me-3  text-success  fa-regular fa-circle-check"></i>
                    <h5 className='text-muted d-inline'>In addition to the mentioned documents above, there may be additional
                        documents required depending on the type of goods <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; and customs requirements of
                        the importing country. It is advisable to communicate directly with Nile Cargo to <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        get a detailed and updated list of the required documents for your specific
                        shipment and target country.
                    </h5>
                    <hr />
                    <h5 className='text-muted'> N.C. Logistics provides customs clearance services as part of its comprehensive
                        logistics services. Their specialized customs clearance team handles the customs
                        procedures and documentation related to shipments, including permits, taxes, and
                        fees. They work closely with the relevant customs authorities to ensure
                        compliance with local and international customs regulations.
                        Through their customs clearance services, they handle all aspects related to
                        customs, inspection, permits, and customs commitments. N.C. Logistics ‘steam
                        ensures the smooth and timely flow of goods across borders, providing customers
                        with peace of mind and seamless clearance for their shipments.
                        Please note that customs clearance requirements may vary from country to
                        country, and specific information about the shipment and the intended country
                        may be required to provide accurate details about the services provided by N.C.
                        Logistics in this regard
                    </h5>
                </div>
                <hr />
                <hr />
                <Link to="/contact" className="btn btn-danger py-3 px-5">Contact Us</Link>

            </div>
        </div>

    </>
}
