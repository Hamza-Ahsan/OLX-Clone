import React, { Component } from 'react';
import Navbar from '../Components/Navbar'
import { Link_option } from '../Components/Link';
import Footer from '../Components/Footer';


class OpenCard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Link_option />

                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-8'>
                            {/* ///===Slider images===/// */}
                            <div className='container' style={{ backgroundColor: 'black' }}>
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" id='inner_carousel'>
                                        <div className="carousel-item active">
                                          <div className='img_inner_slider'><img src="https://apollo-singapore.akamaized.net/v1/files/aj0nbcmlllac-PK/image;s=200x400;q=60" className="inner_image" alt="..." /></div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://apollo-singapore.akamaized.net/v1/files/aj0nbcmlllac-PK/image;s=200x400;q=60" id='inner_image' className="d-block w-50" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://apollo-singapore.akamaized.net/v1/files/aj0nbcmlllac-PK/image;s=200x400;q=60" id='inner_image' className="d-block w-50" alt="..." />
                                        </div>

                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='col'>
                            <div className='card_desp'>
                                <h6 className="card-title">Rs 100,000 - Flexcible</h6>
                                <p className="card-subtitle" style={{ marginBottom: '10px' }}>Suzuki Margella</p>
                                <li style={{ display: 'flex' }}>
                                    <p className='product_city'>Karachi</p>
                                    <p className='product_date'>OCT 24</p>
                                </li>
                            </div>
                            <div className='seller_card'>
                                <h3>Seller description</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default OpenCard