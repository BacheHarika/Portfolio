
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const githubProfileUrl = 'https://github.com/BacheHarika'; 
  const instagramProfileUrl = 'https://www.instagram.com/_harika_nagesh_/'; 

  return (
    <>
      <div className='HorizontalLine'></div>
      <div>
        <footer>
          <div className='Footer'>
            <div >
              <h>Phone</h>
              <div className='phone'><p>7075780635</p></div>
            </div>
            <div >
              <h>Email</h>
              <div className='Email'><p>bacheharika@gmail.com</p></div>
              
            </div>
            <div className='FollowContainer'>
              <h>Follow me</h>
              <div className='IconContainer'>
                <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className='Icon' />
                </a>
                <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className='Icon' />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
