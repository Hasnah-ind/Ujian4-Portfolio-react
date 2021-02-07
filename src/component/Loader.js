import React, { Component } from 'react'

class Loader extends Component {
    render() {
        return (
            <div>
                 <div className="loader-container" id="page-loader">
                    <div className="loading-wrapper">
                        <div className="loader-animation" id="loader-animation">
                            <span className="loader"><span class="loader-inner"></span></span>
                        </div>

                        <div className="loader-name" id="loader-name">
                           Hasnah <strong>Nurul</strong>
                        </div>

                        <p className="loader-job" id="loader-job">Web Developer</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default Loader;