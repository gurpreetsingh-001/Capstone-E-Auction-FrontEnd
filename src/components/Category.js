import React from 'react'

export default function Category() {
  return (
    <>
    <div className="browse-section ash-bg"></div>
       
        <div className="browse-slider-section mt--140">
            <div className="container">
                <div className="section-header-2 cl-white mb-4">
                    <div className="left"  >
                        <h6 className="title pl-0 w-100">Browse the highlights</h6>
                    </div>
                    <div className="slider-nav">
                        <a href="#0" className="bro-prev"><i className="flaticon-left-arrow"></i></a>
                        <a href="#0" className="bro-next active"><i className="flaticon-right-arrow"></i></a>
                    </div>
                </div>
                <div className="m--15">
                    <div className="browse-slider owl-theme owl-carousel">
                        <a href="#0" className="browse-item">
                            <img src="http://localhost:5000/assets/images/auction/01.png" alt="auction" />
                            <span className="info">Vehicles</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="http://localhost:5000/assets/images/auction/02.png" alt="auction" />
                            <span className="info">Jewelry</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="http://localhost:5000/assets/images/auction/03.png" alt="auction" />
                            <span className="info">Watches</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="http://localhost:5000/assets/images/auction/04.png" alt="auction" />
                            <span className="info">Electronics</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="http://localhost:5000/assets/images/auction/05.png" alt="auction" />
                            <span className="info">Sports</span>
                        </a>
                        <a href="#0" className="browse-item">
                            <img src="http://localhost:5000/assets/images/auction/06.png" alt="auction" />
                            <span className="info">Real Estate</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}
