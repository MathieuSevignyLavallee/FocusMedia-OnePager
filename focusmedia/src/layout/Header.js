import React from 'react';
import logo from '../files/images/HorizontalClearLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px'
        }}>
            <img src={logo} alt="Logo" style={{
                height: '60px',
                width: 'auto',
                marginLeft: '2%',
                marginRight: 'auto'
            }} />
            <nav style={{
                marginLeft: 'auto',
                marginRight: '2%'
            }}>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <li style={{ margin: '0 10px' }}>
                        <a href="#section3" style={{ color: 'white', textDecoration: 'none' }}><h4>Services</h4></a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="#price" style={{ color: 'white', textDecoration: 'none' }}><h4>Réservation</h4></a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="#footer" style={{ color: 'white', textDecoration: 'none' }}><h4>Contact</h4></a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="https://www.instagram.com/thisisfocusmedia" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                            <h4><FontAwesomeIcon icon={faInstagram} /></h4>
                        </a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="https://www.tiktok.com/@thisisfocusmedia" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                            <h4><FontAwesomeIcon icon={faTiktok} /></h4>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
