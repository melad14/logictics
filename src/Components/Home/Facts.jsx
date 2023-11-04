import React from 'react'
import './Home.css'

export default function Facts() {
  return <>
  <div className="container-xxl py-5">
      <div className="container py-5">
          <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <h3 className="text-danger text-uppercase mb-3">Some Facts</h3>
                  <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
                  <p className="mb-5">Managing and operating a diverse fleet that serves the international shipping sector to and from all countries of the world with safety, sustainability, and customer</p>
                  <div className="d-flex align-items-center">
                      <i className="fa fa-headphones fa-2x flex-shrink-0 lonn p-3 text-white"></i>
                      <div className="ps-4">
                          <h6>Call for any query!</h6>
                          <h3 className="text-danger m-0"> +2 01116031999</h3>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="row g-4 align-items-center">
                      <div className="col-sm-6">
                          <div className="lonn p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
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
  </>
}
