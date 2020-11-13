import React from 'react';
import { connect } from 'react-redux'
import '../App.css'
import Navbar from '../Components/Navbar'
import { Link_option, Slide_image } from '../Components/Link'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Link_option />
                <Slide_image />
                <Cards />
                <Footer />
            </div>
        )
    }
}


export default Home;