import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class InforCards extends Component {
    render() {
        return (
            <div>
                <div>
                    <p className='page_name'>Mobiles Phones</p>
                </div>

                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col col-3'>
                            <div>
                                <h3 className='filter'>Filter</h3>
                            </div><hr />
                            <div>
                                <button className='infor_cate'>CATEGORIES</button>
                                <div className='all_cate'>
                                    <p>All Categories</p>
                                    <p className='mobile_cate'>Mobiles</p>
                                    <ul className='list_cate'>
                                        <li>Tablets (43094)</li>
                                        <li>Accessories (2933)</li>
                                        <li style={{ fontWeight: 'bold', color: "black" }}>Mobile Phones (1010)</li>
                                    </ul>
                                </div>
                            </div><hr />

                            <div>
                                <button className='infor_cate'>LOCATIONS</button>
                                <div className='all_cate'>
                                    <p className='mobile_cate'>Pakistan</p>
                                    <ul className='list_cate'>
                                        <li><Link>Punjab (2333)</Link></li>
                                        <li><Link>Sindh (4546)</Link></li>
                                        <li><Link>Khyber Pakhtunkhwa (4547)</Link></li>
                                        <li><Link>Islamabad Capital Territory (9345)</Link></li>
                                        <li><Link>Bolochistan (656)</Link></li>
                                        <li><Link>View more</Link></li>
                                    </ul>
                                </div>
                            </div><hr />

                            <div>
                                <button className='infor_cate'>MAKE</button>
                                <div className='all_cate'>
                                <li><Link>Samsung</Link></li>
                                <li><Link>Other Mobiles</Link></li>
                                <li><Link>Huawei</Link></li>
                                <li><Link>OPPO</Link></li>
                                <li><p>View all</p></li>
                                </div>
                            </div><hr />

                            <div>
                                <button className='infor_cate'>PRICE</button>
                                <div className='all_cate' id='all_cateInput'>
                                    <div className='row'>
                                        <input type='text' placeholder='Max' />
                                        <input type='text' placeholder='Min' />
                                        <button>V</button>
                                    </div>
                                </div>
                            </div><hr />

                            <div>
                                <button className='infor_cate'>CONDITION</button>
                                <div className='all_cate'>
                                        <li><input type='checkbox' /> Used (6545)</li>
                                        <li><input type='checkbox' /> New (2334)</li>
                                </div>
                            </div><hr />

                        </div>
                        <div className='col'>
                            <div className='row'>

                            {this.props.Product.map(item => (
                           <Link to='/Card'><div className="card">
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
                                </div>



                                <div className="card">
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

                </div>


            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    Product: state.Mobile.Mobile_Contents
})

// const mapDispatchToProps = (dispatch) => ({
//     setdata: () => dispatch(set_data())
// })

export default connect(mapStateToProps, null)(InforCards);
