import React, {Fragment, Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Home.css'

const user = () => {

}

class Home extends Component{
    // componentDidMount(){
    //     fetch('').then(res => {
    //         console.log(res)
    //         return res
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // } 

    renderHomePage(){
        if(!this.props.auth){

            return (
              <div id="wrapper">
              <div id="left">

                
                <div id="signin">
                  <a href="/google" class="primary-btn"><p>Signup with google</p></a>
                </div>
              </div>
              <div id="right">
                <div id="showcase">
                  <div class="showcase-content">
                    <h1 class="showcase-text">
                      <strong></strong>
                    </h1>
                    <a href="#" class="secondary-btn"></a>
                  </div>
                </div>
              </div>
            </div>
            );

        }
        else{
            return[
              <div className="container">
                  <div className="row">
                  <div className="col s12 m7">
                    <div className="card">
                      <div className="card-image">
                        <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"/>
                        <span className="card-title">Card Title</span>
                      </div>
                      <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                      </div>
                      <div className="card-action">
                        <a href="#">This is a link</a>
                      </div>
                    </div>
                  </div> <Link to="/api"> love</Link>

                </div>
              </div>

  
            ]
        }
    }

    render (){
        return(
            <section >
              <div className="">
                {this.renderHomePage()}
              </div>

            </section>
    

        )    
    }

}

let mapStateToProps = ({auth}) => {
    return {auth}
  }
  

export default connect(mapStateToProps)(Home)               

//<a href="/api/logout"> logout </a>
