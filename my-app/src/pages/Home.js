import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/Home.css"
import bg from '../assets/images/bg.jpg'
import aadharImage from '../assets/images/aadhaar-card.webp'
import panImage from '../assets/images/pan-card.jpg'
import dlImage from '../assets/images/dl-card.webp'
import passportImage from '../assets/images/passport.png'
import taxImage from '../assets/images/tax.webp'
import businessImage from '../assets/images/business-registration.png'
import landImage from '../assets/images/Land-Registration.png'


function Home() {

    let navigate = useNavigate();

    function aadharButton() {
        navigate('/aadharDetails')
    }

    function panButton() {
        navigate('/panDetails')
    }

    function dlButton() {
        navigate('/dlDetails')
    }

    function vehicleButton() {
        navigate('/vehicleDetails')
    }

    function voterButton() {
        navigate('/voterDetails')
    }

    function passportButton() {
        navigate('/passportDetails')
    }

    function landButton() {
        navigate('/landDetails')
    }

    function taxButton() {
        navigate('/taxDetails')
    }

    function businessButton() {
        navigate('/businessDetails')
    }


    return (
        <>
        

            

            {/* Background Image */}
            
            <div>
            <img src={bg} alt='passport'></img>
            </div>

            <section className="container">

                {/* Welcome message */}
                <div className="message">
                    <b> Navigating<br /><p></p>The Future<br /><p></p>With Innovation</b>

                    {/* <br/>Streamlining processes for citizens. 
                            <br/>Uncomplicated guidance, real-time updates, and constant accessibility.
                            <br/>Empowering citizens with professionalism and clarity in every step.type="submit"<br/><br/><br/><br/> */}

                    <p></p><br />
                    {/* <div className='scroll'>
                        <h5>Scroll down to get cards ↓ </h5>
                        </div> */}
                </div>

                {/* Cards */}
                <div className="row">

                    {/* Aadhar Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={aadharImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Adhaar Card</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={aadharButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Pan Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={panImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Pan Card</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={panButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* DL Card */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={dlImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Driving License</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={dlButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Vehicle Registration */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={aadharImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Vehicle Registration</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={vehicleButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Voter ID */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={aadharImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Voter ID</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={voterButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Passport */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={passportImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Passport</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={passportButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Land Registrtion */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={landImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Land Registration</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={landButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Taxation & Income Tax Returns */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={taxImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Taxation & Income Tax Returns </h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={taxButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Business Registration */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={businessImage} className='photo' alt="Image not found" />
                            <div className="card-body">
                                <h5 className="card-title">Business Registration</h5>
                                <p className="card-text">For more details click on the button below.</p>
                                <button onClick={businessButton} className='card-button'>More Details</button>
                            </div>
                        </div>
                    </div>

                     {/* <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src={aadharImage} className='photo' alt="Image not found" />
                                <div class="card-body">
                                    <h5 class="card-title">Taxation & Income Tax Returns </h5>
                                    <p class="card-text">For more details click on the button below.</p>
                                    <button onClick={taxButton} className='card-button'>More Details</button>
                                </div>
                            </div>
                        </div> */}

                        

                        

                        
                       {/* <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src={aadharImage} className='photo' alt="Image not found" />
                                <div class="card-body">
                                    <h5 class="card-title">Taxation & Income Tax Returns </h5>
                                    <p class="card-text">For more details click on the button below.</p>
                                    <button onClick={taxButton} className='card-button'>More Details</button>
                                </div>
                            </div>
                        </div>  */}

                </div>
            </section><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className='footer'>
                <div className='f-contact'>
                    <b><h1>Contact Us</h1></b>

                </div>
                
                <div className='f-contact-details'>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-phone"> 8934472190</i><br /><br />
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-instagram">    @smart.gov</i><br /><br />
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-envelope">    smartgov@gmail.com</i>
                    </a>
                </div>
            </div>
                <div className='emojis'>
                    <section className="text-center mb-3">
                        <a href="" className="text-white me-4">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fa fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fa fa-github"></i>
                        </a>
                    </section>
                </div>







                <div className='footer-copy' >
                    Copyright © 2023 Smart Government
                   
                </div>


            
        </>
    )

}

export default Home