import React from 'react';

function Footer() {
    return (
        <footer id='footer'>
            <div className="footer-info">
                <p>Felix Renaud</p>
                <a href="mailto:info@thisisfocusmedia.com">info@thisisfocusmedia.com</a>
                <a href="tel:+15149790003">514-979-0003</a>
                <a href="https://www.instagram.com/thisisfocusmedia" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.tiktok.com/@thisisfocusmedia" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
            <div className="footer-email">
                <form action="path_to_your_server_endpoint" method="POST">
                    <label htmlFor="email">Votre Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Votre Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </footer>
        
    );
}

export default Footer;
