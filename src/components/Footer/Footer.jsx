import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="padding innerWidth flexCenter f-container">

            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <span className="secondryText">
                A vision statement almost sounds mystical.  far from it.<br/>
                 Rather, a vision statement is a foundational business document.
                </span>
            </div>

            <div className="flexColStart f-right">

                <span className="primartText">Information</span>
                <span className="secondryText"> new york,fl 4571 ,usa</span>

                <div className="flexCenter f-menu">
                    <span>property</span>
                    <span>services</span>
                    <span>product</span>
                    <span>about us</span>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
