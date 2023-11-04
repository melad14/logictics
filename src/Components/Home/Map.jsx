import React from 'react'
import './Home.css'

export default function Map() {
  return <>
   <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container contact-page py-5 px-lg-0">
            <div className="row g-5 mx-lg-0"style={{height:'600px'}}>
      
                <div className="col-md-12 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s">
                    <div className="position-relative h-100">
                        <iframe className="position-absolute w-100 h-100" style={{objectFit: 'cover'}}
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3412.7804768467004!2d29.91640527517964!3d31.199099562945353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDExJzU2LjciTiAyOcKwNTUnMDguMyJF!5e0!3m2!1sen!2sbd!4v1698780639614!5m2!1sen!2sbd"
                         allowFullScreen="" aria-hidden="false"
                        tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}
