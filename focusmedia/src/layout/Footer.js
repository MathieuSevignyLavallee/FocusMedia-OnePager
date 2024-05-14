import React from 'react';
import logo from '../files/images/HorizontalClearLogo.png';
import emailjs from "emailjs-com";

function Footer() {

    const isMobile = window.innerWidth <= 900;

    function sendEmail(e) {
        e.preventDefault();

        var status = 0;
        var email = document.getElementsByName("email")[0];
        var emailError = document.getElementById("emailError");

        if (!email.value) {
            emailError.innerHTML = "Please enter a valid email address";
            status = -1;
        } else {
            emailError.innerHTML = "";
        }

        var message = document.getElementsByName("message")[0];
        var messageError = document.getElementById("messageError");

        if (!message.value) {
            messageError.innerHTML = "Please enter a message";
            status = -1;
        } else {
            messageError.innerHTML = "";
        }

        var subject = document.getElementsByName("subject")[0];
        var subjectError = document.getElementById("subjectError");

        if (!subject.value) {
            subjectError.innerHTML = "Please enter a subject";
            status = -1;
        } else {
            subjectError.innerHTML = "";
        }

        console.log(subject.innerHTML);

        if (status === -1) {
            return false;
        }

        emailjs.sendForm('service_sep5zvk', 'template_bp3z0wm', e.target, 'eX86mubH8rB3HYwZL')
            .then((result) => {
                alert('Email sent!');
            }, (error) => {
                alert(error.text);
            });

        e.target.reset();
    }

    return (
        <footer id='footer'>
            <div class="grid-container">
                <div class="item1" style={{ borderBottomColor: 'white', alignContent: 'left' }}>
                    <img src={logo} alt="Logo" style={{
                        height: isMobile ? '50px' : '60px',
                        width: 'auto',
                        marginLeft: '10px'
                    }} />
                </div>
                <div class="item2" style={{ borderBottomColor: 'white' }}><p style={{marginLeft: '10px'}}>Contacter nous</p></div>
                <div class="item3">
                    <div style={{marginLeft: '10px'}}>
                        <p>Felix Renaud</p>
                        <p><a href="mailto:info@thisisfocusmedia.com">info@thisisfocusmedia.com</a></p>
                        <p><a href="tel:+15149790003">514-979-0003</a></p>
                        <p><a href="https://www.instagram.com/thisisfocusmedia" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                        <p><a href="https://www.tiktok.com/@thisisfocusmedia" target="_blank" rel="noopener noreferrer">TikTok</a></p>

                    </div>
                </div>
                <div class="item4">
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                            />
                        </div>
                        <div className="form-group pt-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                            />
                        </div>
                        <div>
                            <span id="emailError"></span>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                            />
                        </div>
                        <div>
                            <span id="subjectError"></span>
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                id=""
                                cols="30"
                                rows="8"
                                placeholder="Your message"
                                name="message"
                            ></textarea>
                        </div>
                        <div>
                            <span id="messageError"></span>
                        </div>
                        <div>
                            <button type="submit">
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
