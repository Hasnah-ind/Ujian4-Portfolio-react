import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <section id="body" class="">

                    <div className="container">
                        
                        {/* /MAIN MENU */}
                        {/* SECTION: vCard Body  */}
                        <div className="section-vcardbody section-home" id="section-home">
                            {/* Profile pic*/}
                            <div className="vcard-profile-pic">
                                <img src="img/profile2.jpg" id="profile2" alt />
                                <img src="img/profile.jpg" id="profile1" className="profileActive" alt />
                            </div>
                            {/* /Profile pic */}
                            {/* Description */}
                            <div className="vcard-profile-description">
                                {/* Profile title */}
                                <h1 className="profile-title">Hi, i'm <span className="color1">Nurul Hasnah!</span></h1>
                                <h2 className="profile-subtitle">Web Designer &amp; Developer</h2>
                                {/* /Profile Title */}
                                {/* Description Text */}
                                <hr className="hr1" />
                                <div className="vcard-profile-description-text">
                                    <p>Participant of Juara Coding based on Indonesia. InsyaAllah became programmer.</p>
                                </div>
                                {/*/ Description Text */}
                                {/* Description feature */}
                                <div className="vcard-profile-description-feature">
                                    {/* item */}
                                    <div className="vcard-profile-description-ft-item">
                                        <p>email:  hasnah@dotrex.co / phone +123 456 789 111</p>
                                    </div>
                                    {/* item */}
                                </div>
                                {/* /Description feature */}
                            </div>
                            {/* /Description */}
                            {/* Footer */}
                            <div className="vcard-footer">
                                {/* Social Icons */}
                                <div className="footer-social-icons">
                                    <a href="#"><i className="fa fa-instagram" /></a>
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                    <a href="#"><i className="fa fa-linkedin" /></a>
                                    <a href="#"><i className="fa fa-youtube" /></a>
                                </div>
                                {/* /Social Icons */}
                            </div>
                        </div>
                        {/* /SECTION: vCard Body  */}
                    </div>
                </section>
            </div>
            

        )
    }
}

export default Home