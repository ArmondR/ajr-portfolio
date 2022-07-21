import React from 'react';
import photo from '../../assets/images/profile-pic.png';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About</h1>
            <div>
                <img src={photo} alt='profile' className='profile-img' />
            </div>
            <p>
            Web developer with a certificate in full stack web development earned through Rutgers University. Having prior education in graphic design and animation; creativity is a naturally developed asset.
            Known as having creative ideas and applying them to find innovative ways to solve problems. With my educational and applied experience in graphic design I also have developed great time-management 
            skills coupled with my attention to detail. With newly gained skills in technologies such as JavaScript, HTML, and CSS, I aim to develop user friendly applications to enhance UX and UI experiences. 
            I’m eager to apply my skills with a driven team that shares the desire to deliver a gratifying impact to the user.
            </p>
        </section>
    );
}

export default About;