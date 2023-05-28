import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer content'>
      <a href="https://github.com/jmcgown14" target="_blank">
        <FaGithub className="icon"/>
      </a>
      <a href="https://www.linkedin.com/in/johnathan-mcgown/" target="_blank">
        <FaLinkedin className="icon"/>
      </a>
    </footer>
  );
}

export default Footer;