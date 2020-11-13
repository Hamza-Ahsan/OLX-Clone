import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Wallpaper from '../Images/hero_bg_pk.jpg'

class Link_option extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <div className="dropdown">
                        <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Dropdown link
        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <div className="col">header
            <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <Link className="nav-link" href="#">Cars</Link>
                    <Link className="nav-link" to="/Mobile Phones">Mobile Phones</Link>
                    <Link className="nav-link" href="#">Motorcyles</Link>
                    <Link className="nav-link" href="#">Houses</Link>
                    <Link className="nav-link" href="#">TV-Video-Audio</Link>
                    <Link className="nav-link" href="#">Tablets</Link>
                    <Link className="nav-link" href="#">Lands and Plots</Link>
                </nav>
            </div>

        )
    }
}

class Slide_image extends Component {
    render() {
        return (
            <div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Wallpaper} style={{ height: "250px" }} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div>
                    <p className='page_name'>Fresh Recommendations</p>
                </div>
            </div>
        )
    }
}



export {
    Link_option,
    Slide_image
};
