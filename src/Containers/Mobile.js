import React from 'react';
import { connect } from 'react-redux'
import '../App.css'
import Navbar from '../Components/Navbar'
import { Link_option, Slide_image } from '../Components/Link'
import InforCards from '../Components/InforCards'
import Footer from '../Components/Footer'
import { Component } from 'react';


class Mobile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Link_option />
                <Slide_image />
                <InforCards />
                <Footer />
            </div>
        )
    }
}


export default Mobile;