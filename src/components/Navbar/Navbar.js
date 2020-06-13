

import React, { Component} from 'react';

import { connect } from 'react-redux';

import {Link} from 'react-router-dom';
import './navbar.css';
import logo from './BIT.PLAY_LOGO__SYMBOL.png';





class Navbar extends Component {

  renderContent(){
    switch(this.props.auth){
      case null:
        return 
      case false:
        return  <li><a href="api/auth/google">login</a></li> // meaning iam not login
      default:
    return <li><a> <img src ={this.props.auth.imageUrl}  className="img-logo"/></a></li> //meaning iam login
    }
  }

  render() {

    // console.log(this.props.auth)


    return(
      
        <nav className="nav_bar">
          
        <div className="nav-wrapper container inner_nav">
          <Link to="/" className=""><img src={logo}  className="img-logo" /></Link>
          <ul id="nav-mobile" className="right">
            <li><Link to=''></Link></li>
            { this.renderContent()}
          </ul>
        </div>
      </nav>
    );
}
}
let mapStateToProps = ({auth}) => {
  return {auth}
}

// old version
// function mapStateToProps(state) {
//   return {auth: state.auth}
// }


export default connect(mapStateToProps)(Navbar);
// hide-on-med-and-down
