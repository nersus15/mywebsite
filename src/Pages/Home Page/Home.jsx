import React, { Component, Fragment } from 'react';
import '../../asset/css/style.css'
import NavbarComp from '../../Components/Stateless/Menu Component/NavbarComp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyBlog from '../My Blog Page/MyBlog';
import PostRead from '../My Blog Page/PostRead';

class Home extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavbarComp />
                    {/* <Route path='/' exact component /> */}
                    <Route path='/read/:id' component={PostRead} />
                    <Route path='/blog' exact component={MyBlog} />
                </Fragment>
            </Router>
        );
    }
}
export default Home