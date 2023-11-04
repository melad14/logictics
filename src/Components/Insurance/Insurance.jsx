import React from 'react'
import cust from '../../images/WhatsApp Image 2023-10-29 at 12.51.45_f271a576.jpg'
import { Link } from 'react-router-dom'

export default function Insurance() {

    return <>
        <div className="container-xxl py-5">
            <div className=" my-5 ">
            <div className="my-5 text-light">.</div>

                <h2 className='text-danger h1 my-5'>Insurance Services</h2>
                <img src={cust} alt="" className='w-50' />
            </div>
            <div className="container py-5">
                <div className='mb-5'>
                    <h2 className='text-danger'>Cargo Insurance</h2>
                    <h5 className='text-muted'> N.C Logistics has a close working relationship with Major insurance
                        Agencies. <br /> Being able to offer its customers “All Risk” Policies (Clause A, B and
                        C) for</h5>
                </div>
                <ul className='mb-5'>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Marin Insurance.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'> Air Insurance.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Transport Insurance.</h5>
                    </li>
                    <li className="my-2">
                        <i className="fa-regular fa-circle-check text-success mx-2"></i><h5 className='d-inline'>Storage Insurance.</h5>
                    </li>
                </ul>
                <hr />
                <hr />
                <Link to="/contact" className="btn btn-danger py-3 px-5">Contact Us</Link>
            </div>
        </div>

    </>
}
