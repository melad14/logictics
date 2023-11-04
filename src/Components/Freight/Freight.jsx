import React from 'react'
import frigh from '../../img/JetLogistics-etusivu-Hero-image-1920x1067.jpg'
import { Link } from 'react-router-dom'
export default function Freight() {

    return <>
        <div className="container-xxl py-5">
            <div className=" my-5">
            <div className="my-5 text-light">.</div>

                <h2 className='text-danger h1 my-5'>Freight Forwarding & Logistics</h2>
                <img src={frigh} alt="" className='w-50' />

            </div>
            <div className="container py-5">
                <div className='mb-5'>
                    <h2 className='text-danger'>Air freight</h2>
                    <h5 className='text-muted'>We offer air freight services for transporting goods by air, including space booking
                        on aircraft,<br /> cargo management, customs clearance arrangements, and shipment
                        tracking</h5>
                </div>
                <ul>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Positive and Pro-Active Relationships with all Major Airlines </h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Door-to-Door rates and services available </h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Shipments both export and import </h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Direct and daily services.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Hazardous Cargo. </h5>
                    </li>


                </ul>
                <div className='my-5'>
                    <h2 className='text-danger'>Sea freight</h2>
                    <h5 className='text-muted'>We provide sea freight services for transporting goods by sea, including planning, <br />
                        coordination, cargo management, customs clearance procedures, insurance, and
                        tracking.
                    </h5>
                </div>
                <ul>

                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>LCL / FCL / Break Bulk / Reefers :
                            <Link to='/more' className='text-decoration-underline  text-success h6'  > see details</Link></h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Consolidation Service.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Wide choice of Ocean Carriers from any point in the global to another.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Terminal-to-terminal, door-to-Port, Port -to-Door and
                            Door-to-Door services. Wide Range Competitive Rate
                            both export and import. </h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Document Preparation and Insurance. </h5>
                    </li>


                </ul>
                <div className='my-5'>
                    <h2 className='text-danger'>Land freight</h2>
                    <h5 className='text-muted'>We provide land transportation services and transport goods by freight. These
                        services include planning, <br/> coordination, cargo management, logistical distribution
                        and tracking of road shipments
                    </h5>
                </div>
                <ul>

                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>We Covers all ports All over Egypt.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Provides prompt Pick up. Delivery Services.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Containerized Vehicles.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Special trucks compatible with cargo features.</h5>
                    </li>                 
                </ul>
                <hr />
                <hr />
                <Link to="/contact" className="btn btn-danger py-3 px-5">Contact Us</Link>

            </div>
        </div>

    </>
}
