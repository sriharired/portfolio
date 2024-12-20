import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #16213e; /* Adjusted to match previous components */
  padding: 50px 0;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const SocialIconLink = styled(motion.a)`
  color: #ffffff;
  font-size: 1.8rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: #00f260; /* Matching color for hover effect */
    transform: rotate(360deg) scale(1.1); /* Unique rotation and scale effect */
  }
`;

const FooterText = styled(motion.p)`
  font-size: 1rem;
  color: #b0bec5;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const Shape = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <BackgroundShapes>
        <Shape
          style={{ width: '250px', height: '250px', top: '-50px', left: '-50px' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <Shape
          style={{ width: '150px', height: '150px', bottom: '-30px', right: '-30px' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
      </BackgroundShapes>
      <FooterContent>
        <SocialIcons
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SocialIconLink
            href="www.linkedin.com/in/sri-hari-reddy-08207314b"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink
            href="https://github.com/sriharired/"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaTwitter />
          </SocialIconLink>
        </SocialIcons>
        <FooterText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Designed byPutha Sri Hari Reddy. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
