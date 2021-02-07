import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from './component/Loader';
import Main from './component/Main'

export default class App extends Component {
  state = {
  
    isLoading : true
  }
  
  componentDidMount() {
    setTimeout(() => { this.fetchData() }, 1200);
  }
  
  fetchData = ()=>{
    this.setState({isLoading : false})
  }
  render() {
    return (
      <div>
          {this.state.isLoading ? (
         <div><Loader/></div>):
         (
        <section id="body" class="">

          <div class="container">
          <Main/>
            <div className="main-menu" id="main-menu">

              <ul className="main-menu-list">

                <li><a> <Link to="/home">Home</Link></a></li>
                <li><a><Link to="/resume">Resume</Link></a></li>
                <li><a><Link to="/skills">Skills</Link></a></li>
                <li><a><Link to="/portfolio">Portfolio</Link></a></li>
                <li><a><Link to="/blog">Blog</Link></a></li>
                <li><a><Link to="/contact">Contact</Link></a></li>
              </ul>
            <p></p>
            </div>

          </div>
        </section>
         )
  }
      </div>
    )
  }
}
