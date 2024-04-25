import React from 'react';
import video from '../files/videos/FocusMedia_Kick_off.mp4';

function Main() {
    return (
        <main>
            <section id="section1" style={{
                position: 'relative',
                width: '100%',
                height: '50vh',  // Use viewport height for responsive sizing
                overflow: 'hidden'
            }}>
                <video 
                    style={{
                        width: '100%',  // Ensures the video is responsive
                        height: '100%',  // Maintains aspect ratio while covering the section
                        objectFit: 'cover',  // Ensures the video covers the section area without stretching
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'  // Center the video
                    }}
                    src={video} 
                    autoPlay 
                    muted 
                    loop 
                >
                    Your browser does not support the video tag.
                </video>
            </section>
            <section id="section2" style={{ height: '300px', background: '#777' }}>
                <h2>Section 2</h2>
                <p>This is the content of Section 2.</p>
            </section>
            <section id="section3" style={{ height: '300px', background: '#999' }}>
                <h2>Section 3</h2>
                <p>This is the content of Section 3.</p>
            </section>
        </main>
    );
}

export default Main;
