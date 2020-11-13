import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from '../Containers/Home'
import Mobile from '../Containers/Mobile'
import Post from '../Containers/Post'
import OpenCard from '../Containers/OpenCard'

class WebRouter extends Component{
render() {
    return(
        <Router>
             <Route exact path='/' component={Home} />
             <Route exact path='/Mobile Phones' component={Mobile} />
             <Route exact path='/Post' component={Post} />
             <Route exact path='/Card' component={OpenCard} />

        </Router>
    )
}
}


export default WebRouter;