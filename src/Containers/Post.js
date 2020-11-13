import React, { useState } from 'react';
import Logo from '../Images/OLX_New_Logo.png'
import { useDispatch } from 'react-redux'
import { set_data } from '../Store/Action'
import shortid from 'shortid'
import { useHistory } from 'react-router-dom'


function Post_Card() {
    const dispatch = useDispatch();
    let history = useHistory();
    const [pname, setName] = useState('')
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    const [price, setPrice] = useState('')
    
    const setCard = (e) => {
        e.preventDefault();
        const new_Card = {
            id: shortid.generate(),
            image: image,
            name: pname,
            title: title,
            detail: detail,
            price: price
        }
        dispatch(set_data(new_Card))
        history.push('/')
    }
    return (
        <div>
            {/* ///===Navbar===/// */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src={Logo} width="55" height="40" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>
            </div>

            {/* ///====Post Form====/// */}
            <div style={{ textAlign: 'center' }}><h3>POST YOUR AD</h3></div>
            <form onSubmit={(e) => setCard(e)}>
                <div className='container w-50' id='post_form'>
                    <div>
                        <h5>SELECTED CATEGORY</h5>
                    </div>
                </div>
                <div className='container w-50' id='post_form'>
                    <div className='form_div'>
                        <h5>INCLUDE SOME DETAILS</h5>
                    </div>
                    <div className='form_div'>
                        <div>Make *</div>
                        <input type='text' value={pname} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form_div'>
                        <div>Condition *</div>
                        <button>New</button>
                        <button>Used</button>
                    </div>
                    <div className='form_div'>
                        <div>Ad title *</div>
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <div className='input_text' maxLength='70'>
                            <div className='item_form'>Metion the key features of your item (e.g brand, model, age, type)</div>
                            <div>0/70</div>
                        </div>
                    </div>
                    <div className='form_div'>
                        <div>Ad title *</div>
                        <input style={{ height: '100px' }} value={detail} onChange={(e) => setDetail(e.target.value)} type='text' maxLength='4096' />
                        <div className='input_text'>
                            <div className='item_form'>Include condition, features and reason for selling</div>
                            <div>0/4096</div>
                        </div>
                    </div>
                </div>
                <div className='container w-50' id='post_form'>
                    <div className='form_div'>
                        <h5>SET A PRICE</h5>
                    </div>
                    <div className='form_div' style={{ height: '5pc' }}>
                        <div>price *</div>
                        <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className='container w-50' id='post_form'>
                    <div className='form_div'>
                        <h5>UPLOAD PHOTOS</h5>
                    </div>
                    <div className='form_div' style={{ height: '5pc' }}>
                        <input type='file' value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
                <div className='container w-50' id='post_form'>
                    <div className='form_div'>
                    <button type='submit'>Post Now</button>
                   </div>
            </div>
            </form>
        </div>
    )
}


export default Post_Card;