import axios from "axios";
import React, { useState } from "react";
import {toast} from "react-hot-toast";

export default function Contact() {
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [formInitialDetails, setFormInitialDetails] = useState({
        full_Name: "",
        email: "",
        phone: 0,
        service: "type of service",
        loadingPort: "",
        unloadingPort: "",
        weight: "",
        dimensions: "",
        shiping: "type of shipping",
        quantity: 0,
        transport: "mode of transport",
        commodity: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        await axios.post("http://localhost:5000/contact", formInitialDetails, {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        }).then(() => {
            console.log('d5l');
            setButtonText("Send");
            setStatus({ succes: true});
            toast.success("Message sent successfully", { duration: 2000, className: " text-success" });

        }).catch(() => {
            setButtonText("Send");
            setStatus({ succes: false  });
            toast.error('Something went wrong', { duration: 2000, className: "bg-black text-white" });

        })
    };

    function getData(e) {
        const myData = { ...formInitialDetails };
        myData[e.target.name] = e.target.value;
        setFormInitialDetails(myData);
    }

    return (
        <>
            <div className="container-xxl py-5">
                <div className="text-center my-5">
                    <div className="my-3 text-light">.</div>

                    <h2 className="text-danger"> Contact Us</h2>
                    <p>
                        Please fill out the form below and we will get back to you as soon
                        as possible.
                    </p>
                </div>
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-secondary text-uppercase mb-3">
                                Get A Quote
                            </h6>
                            <h1 className="mb-5 text-danger">Request A Free Qoute!</h1>
                            <p className="mb-5">
                                Request a Quote and we will get back to you as soon as possible.
                            </p>
                            <div>
                                <h4 className="text-danger mb-4">Address</h4>
                                <p className="mb-2">
                                    <i className="fa fa-map-marker-alt me-3 text-danger"></i>5
                                    Bastour st. floor 1 apt. 2 - Wabour Al Meyah,
                                    <br /> Bab Sharqi, Alexandria Governorate, Egypt
                                </p>
                                <p className="mb-2">
                                    <i className="fa fa-phone-alt me-3 text-danger"></i> +2
                                    01116031999
                                </p>
                                <p className="mb-2">
                                    <i className="fa fa-envelope me-3 text-danger"></i>
                                    info@nclogictics.com
                                </p>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a className="btn btn-outline-light btn-social" href="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div
                                className="bg-light text-center p-5 wow fadeIn"
                                data-wow-delay="0.5s"
                            >
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="full_Name"
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Your Name"
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="email"
                                                type="email"
                                                className="form-control border-0"
                                                placeholder="Your Email"
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="phone"
                                                type="number"
                                                className="form-control border-0"
                                                placeholder="Your Mobile"
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select
                                                onChange={getData}
                                                name="service"
                                                className="form-select border-0"
                                                style={{ height: "55px" }}
                                            >
                                                <option value="">Type of service</option>
                                                <option value="Freight">Freight</option>
                                                <option value="Customs Clearance">
                                                    Customs Clearance
                                                </option>
                                                <option value="Import of Record/Export of Record">
                                                    Import of Record/Export of Record
                                                </option>
                                                <option value="Distribution/Trucking">
                                                    Distribution/Trucking
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="loadingPort"
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="loading port"
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="unloadingPort"
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="unloading port"
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="weight"
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="weight in kg"
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="dimensions"
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Dimensions"
                                                style={{ height: "55px" }}
                                            />
                                        </div>

                                        <div className="col-12 col-sm-6">
                                            <select onChange={getData} name="shipping" className="form-select border-0" style={{ height: "55px" }}>
                                                <option value='' >type of shipping</option>
                                                <option value='container' >container</option>
                                                <option value='Broke bulk' >Broke bulk</option>
                                                <option value='liquid bulk' >liquid bulk</option>
                                                <option value='RORO' >RORO</option>
                                                <option value='Other' >Other</option>
                                            </select>
                                        </div>


                                        <div className="col-12 col-sm-6">
                                            <input
                                                onChange={getData}
                                                name="quantity"
                                                type="number"
                                                className="form-control border-0"
                                                placeholder="container quantity"
                                                style={{ height: "55px" }}
                                            />
                                        </div>




                                        <div className="col-12 col-sm-6">
                                            <select
                                                onChange={getData}
                                                name="shiping"
                                                className="form-select border-0"
                                                style={{ height: "55px" }}
                                            >
                                                <option value="">Type of shipping</option>
                                                <option value="container">Container</option>
                                                <option value="Broke bulk">Broke bulk</option>
                                                <option value="liquid bulk">Liquid bulk</option>
                                                <option value="RORO">RORO</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>


                                        <div className="col-12 col-sm-6">
                                            <select
                                                onChange={getData}
                                                name="transport"
                                                className="form-select border-0"
                                                style={{ height: "55px" }}
                                                required
                                            >
                                                <option value=""> made of transport</option>
                                                <option value="Air">Air </option>
                                                <option value=" Sea FCL"> Sea FCL</option>
                                                <option value="Sea LCL"> Sea LCL</option>
                                                <option value="ROAD"> ROAD</option>
                                            </select>
                                        </div>


                                        <div className="col-12 col-sm-12">
                                            <input
                                                onChange={getData}
                                                name="commodity"
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Commodity"
                                                style={{ height: "55px" }}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <textarea
                                                onChange={getData}
                                                name="message"
                                                className="form-control border-0"
                                                placeholder="Special Note"
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-danger w-100 py-3"
                                                type="submit"
                                            >
                                                {buttonText}
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

