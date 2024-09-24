// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Nav = styled.nav`
  background: linear-gradient(135deg, #2c5364, #203a43, #0f2027);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in;
`;

const NavLogo = styled(Link)`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 2px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #00f260;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 70px;
    right: 0;
    flex-direction: column;
    background: #203a43;
    width: 100%;
    height: 100vh;
    padding-top: 20px;
  }
`;

const NavItem = styled(motion.li)`
  height: 70px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    &:hover {
      background: #2c5364;
      transform: translateY(0);
    }
  }
`;

const NavLinks = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #00f260;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Backdrop = styled(motion.div)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Backdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        isOpen={isOpen}
        onClick={toggleMenu}
      />
      <Nav>
        <NavLogo to="home" smooth={true} duration={500}>
          Portfolio
        </NavLogo>
        <MenuIcon onClick={toggleMenu}>{isOpen ? '✖' : '☰'}</MenuIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLinks to="introduction" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Introduction
            </NavLinks>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLinks to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              About
            </NavLinks>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <NavLinks to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Projects
            </NavLinks>
          </NavItem>
          <NavItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <NavLinks to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
