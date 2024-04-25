import React from 'react';
import logo from '../files/images/HorizontalClearLogo.png';  // Import the logo

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
                marginLeft: '2%',  // Added left margin for the logo
                marginRight: 'auto'  // Pushes the logo slightly to the right
            }} />
            <nav style={{
                marginLeft: 'auto',  // Pushes the nav slightly to the right
                marginRight: '2%'  // Added right margin for the nav
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
                        <a href="#section1" style={{ color: 'white', textDecoration: 'none' }}>Section 1</a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="#section2" style={{ color: 'white', textDecoration: 'none' }}>Section 2</a>
                    </li>
                    <li style={{ margin: '0 10px' }}>
                        <a href="#section3" style={{ color: 'white', textDecoration: 'none' }}>Section 3</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
