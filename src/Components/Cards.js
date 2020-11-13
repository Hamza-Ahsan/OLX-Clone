import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class Cards extends Component {
    render() {
        return (
            <div>

                <div className='container-fluid' style={{ justifyContent: 'center' }}>
                    <div className='row' id='cards_row'>

                        {this.props.Product.map(item => (
                           <Link to='/Card' key={item.id}><div className="card">
                                <div className="product_img"><img className="img_resolution" src={item.image} /></div>
                                <h6 className="card-title">{item.price}</h6>
                                <p className="card-subtitle" style={{ marginBottom: '10px' }}>{item.infor}</p>
                                <li style={{ display: 'flex' }}>
                                    <p className='product_city'>{item.city}</p>
                                    <p className='product_date'>{item.date}</p>
                                </li>
                            </div></Link>

                        ))}


                        {/* <div className="card">
                                <div className="product_img"><img className="img_resolution" src="https://apollo-singapore.akamaized.net/v1/files/gxwt8iage1cv1-PK/image;s=200x400;q=60" /></div>
                                <h6 className="card-title">Rs 15,000</h6>
                                <p className="card-subtitle" style={{ marginBottom: '10px' }}>Generator for sale</p>
                                <li style={{ display: 'flex' }}>
                                    <p className='product_city'>karachi</p>
                                    <p className='product_date'>sep 04</p>
                                </li>
                            </div>

                            <div className="card">
                                <div className="product_img"><img className="img_resolution" src="https://apollo-singapore.akamaized.net/v1/files/gxwt8iage1cv1-PK/image;s=200x400;q=60" /></div>
                                <h6 className="card-title">Rs 15,000</h6>
                                <p className="card-subtitle" style={{ marginBottom: '10px' }}>Generator for sale</p>
                                <li style={{ display: 'flex' }}>
                                    <p className='product_city'>karachi</p>
                                    <p className='product_date'>sep 04</p>
                                </li>
                            </div> */}

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    Product: state.Home.Home_Contents
})

// const mapDispatchToProps = (dispatch) => ({
//     setdata: () => dispatch(set_data())
// })

export default connect(mapStateToProps, null)(Cards);