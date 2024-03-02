import AOS from 'aos'
import React,{useEffect} from 'react'


export default function Banner() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <section className="banner-section bg_img bbb">
        <div className="container" >
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-xl-6">
                    <div className="banner-content cl-white">
                        <h5 className="cate" data-aos="fade-down" data-aos-duration="1000" >Next Generation Auction</h5>
                        <h1 className="title" data-aos="zoom-out-up" data-aos-duration="1200"><span className="d-xl-block">Find Your</span> Next Deal!</h1>
                        <p className="pras" data-aos="zoom-out-down" data-aos-duration="1300" >
                            Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.
                        </p>
                        <a href="#0" className="custom-button yellow btn-large" >Get Started</a>
                    </div>
                </div>
                <div className="d-none d-lg-block col-lg-6">
                    <div className="banner-thumb-2">
                        <img src="http://localhost:5000/assets/images/banner/banner-1.png" alt="banner" />
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-shape d-none d-lg-block">
            <img src="http://localhost:5000/assets/css/img/banner-shape.png" alt="css" />
        </div>
    </section>
    </>
  )
}
