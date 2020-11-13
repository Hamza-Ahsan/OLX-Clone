import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Olxapp from '../Images/olx mobile app.jpg';


class Footer extends Component{
    render() {

        return (
            <div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Olxapp} style={{ height: "200px" }} className="d-block w-100" alt="..." />
                    </div>
                </div>


                <div className='container-fluid bg-light' id='footer_container'>
                    <div className='row'>
                        {/* //===Column===// */}
                        <div className='col'>
                            <div className='footer-pad'>
                                <ul className='unstyled-list'>
                                    <h6 className='footerItems'>POPULAR CATEGORIES</h6>
                                    <li><Link to='#'>Cars</Link></li>
                                    <li><Link to='#'>Flats for rent</Link></li>
                                    <li><Link to='#'>Jobs</Link></li>
                                    <li><Link to='#'>Mobiles Phones</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* //===Column===// */}
                        <div className='col'>
                            <div className='footer-pad'>
                                <ul className='unstyled-list'>
                                    <h6 className='footerItems'>TRENDING SEARCHES</h6>
                                    <li><Link to='#'>Bikes</Link></li>
                                    <li><Link to='#'>Watches</Link></li>
                                    <li><Link to='#'>Books</Link></li>
                                    <li><Link to='#'>Dogs</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* //===Column===// */}
                        <div className='col'>
                            <div className='footer-pad'>
                                <ul className='unstyled-list'>
                                    <h6 className='footerItems'>ABOUT US</h6>
                                    <li><Link to='#'>About OLX Group</Link></li>
                                    <li><Link to='#'>OLX Blog</Link></li>
                                    <li><Link to='#'>Contact Us</Link></li>
                                    <li><Link to='#'>OLX for Businesses</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* //===Column===// */}
                        <div className='col'>
                            <div className='footer-pad'>
                                <ul className='unstyled-list'>
                                    <h6 className='footerItems'>OLX</h6>
                                    <li><Link to='#'>Help</Link></li>
                                    <li><Link to='#'>Sitemap</Link></li>
                                    <li><Link to='#'>Legal & Privacy information</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col'>
                            <ul className='social_network'>
                                <h6 className='footerItems'>FOLLOW US</h6>
                                <li><Link to='#'><Icon circular name='facebook f' /></Link></li>
                                <li><Link to='#'><Icon circular name='twitter' /></Link></li>
                                <li><Link to='#'><Icon circular name='play' /></Link></li>
                                <li><Link to='#'><Icon circular name='instagram' /></Link></li>
                            </ul>
                        </div>


                    </div>
                </div>


                <div className='container-fluid' style={{ padding: '12px 30px', backgroundColor: 'rgb(23 78 69)' }}>
                    <li style={{ display: 'flex', listStyleType: 'none' }}>
                        <p style={{ flex: 1, margin: 0, color: '#fff' }}>Others Countries   India   South Africa   Indonesia</p>
                        <p style={{ color: '#fff' }}>Free Classifieds in Pakistan @ 2006 2020 OLX</p>
                    </li>
                </div>

            </div>
        )
    }
}

export default Footer;