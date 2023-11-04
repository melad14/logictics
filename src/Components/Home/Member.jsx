import React from 'react'
import mem from '../../images/members.PNG'
export default function Member() {
    return <>
    <div className="container-xxl py-5">
    <div className="container py-5">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase">WE ARE TRUSTED</h6>
        <h1 className="mb-5 text-danger">Members Of</h1>
      </div>
      <div className="row g-4">
        <img src={mem} alt="" />
      </div>
    </div>
  </div>
</>
}
