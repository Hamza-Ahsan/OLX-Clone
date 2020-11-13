import React from 'react';
import { Component } from 'react';
import Logo from '../Images/OLX_New_Logo.png';
import { Icon } from 'semantic-ui-react';
import Guitar from '../Images/guitar_login.webp';
import Heart from '../Images/heart_login.webp';
import Person from '../Images/person_login.webp';
import { connect } from 'react-redux';
import { Facebook_login } from '../Store/Action'
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap'
import CloseIcon from '@material-ui/icons/Close';



class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  Popupmodel() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src={Logo} width="55" height="40" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <input className="form-control mr-sm-2" id='location-box' type="search" placeholder="Pakistan" aria-label="Search" />
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <div className="input-group md-form form-lg form- pl-0">
                  <input className="form-control" id="Search-box" type="text" placeholder="Find Cars,Mobile Phones and more..." aria-label="Search" />
                  <div className="input-group-append">
                    <span className="input-group-text black lighten-3" id="basic-text1"><Icon className='search_icon' size='large' name='search' /></span>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id='login-btn' onClick={() => this.Popupmodel()}>Login</Link>
              </li>
              <li className="nav-item">
              <Link to='/Post'><button className='Sell_btn'><Icon name='plus' />SELL</button></Link>
              </li>
            </ul>
          </div>
        </nav>


        {/* ////====PopUp Container=====/// */}
          <Modal show={this.state.show}  id="popDiv" className="ontop">
            <div border={1} id="popup">
              <Link className="close-tab" onClick={() => this.Popupmodel()}><CloseIcon large /></Link>
              {/* ///===For Slider===// */}
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img style={{ width: '45px' }} src={Guitar} className="d-block w-50" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img style={{ width: '45px' }} src={Heart} className="d-block w-50" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img style={{ width: '45px' }} src={Person} className="d-block w-50" alt="..." />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* ///====Buttons====// */}
              <div className="login_btn_container">
                <button className="login_btn">Continue with phone</button>
                <button onClick={() => this.props.Facebook_login()} className="login_btn">Continue with facebook</button>
                <button className="login_btn">Continue with google</button>
                <button className="login_btn">Continue with email</button>
              </div>
              {/* ///====Sentence====/// */}
              <div className="sent_login">
                <p>We won't share your personal details with anyone</p>
              </div>
            </div>
          </Modal>
      </div>
    )
  }
}


// const mapStateToProps = (state) => ({
//   Product: state
// })

const mapDispatchToProps = (dispatch) => ({
    Facebook_login: () => dispatch(Facebook_login())
})

export default connect(null, mapDispatchToProps)(Navbar);



