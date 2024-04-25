import React from 'react';
import logo from '../files/images/HorizontalClearLogo.png';  // Import the logo

function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
            <img src={logo} alt="Logo" style={{ height: '100px', paddingLeft: '10%'}} />  {/* Increase logo size and align to left */}
            <nav style={{ paddingRight: '10%' }}>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
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
