// components/FuturisticHeroSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FuturisticHeroContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 30px 20px;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #ffffff;
`;

const GlitchText = styled(motion.h1)`
  font-size: 3.0rem;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  color: #ffffff;
  letter-spacing: 4px;
  text-align: center;
  &::before,
  &::after {
    content: '${(props) => props.children}';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }
  &::before {
    left: 2px;
    text-shadow: -2px 0 cyan;
    animation: glitch-1 2s infinite linear alternate-reverse;
  }
  &::after {
    left: -2px;
    text-shadow: -2px 0 red;
    animation: glitch-2 1.5s infinite linear alternate-reverse;
  }
  @keyframes glitch-1 {
    0% {
      clip: rect(44px, 9999px, 56px, 0);
      transform: skew(0.3deg);
    }
    5% {
      clip: rect(40px, 9999px, 32px, 0);
      transform: skew(0.3deg);
    }
    10% {
      clip: rect(56px, 9999px, 72px, 0);
      transform: skew(0.3deg);
    }
    15% {
      clip: rect(56px, 9999px, 32px, 0);
      transform: skew(0.3deg);
    }
    20% {
      clip: rect(88px, 9999px, 76px, 0);
      transform: skew(0.3deg);
    }
    25% {
      clip: rect(56px, 9999px, 64px, 0);
      transform: skew(0.3deg);
    }
    30% {
      clip: rect(12px, 9999px, 18px, 0);
      transform: skew(0.3deg);
    }
    35% {
      clip: rect(56px, 9999px, 72px, 0);
      transform: skew(0.3deg);
    }
    40% {
      clip: rect(56px, 9999px, 32px, 0);
      transform: skew(0.3deg);
    }
    45% {
      clip: rect(88px, 9999px, 76px, 0);
      transform: skew(0.3deg);
    }
    50% {
      clip: rect(56px, 9999px, 64px, 0);
      transform: skew(0.3deg);
    }
    55% {
      clip: rect(12px, 9999px, 18px, 0);
      transform: skew(0.3deg);
    }
    60% {
      clip: rect(56px, 9999px, 72px, 0);
      transform: skew(0.3deg);
    }
    65% {
      clip: rect(56px, 9999px, 32px, 0);
      transform: skew(0.3deg);
    }
    70% {
      clip: rect(88px, 9999px, 76px, 0);
      transform: skew(0.3deg);
    }
    75% {
      clip: rect(56px, 9999px, 64px, 0);
      transform: skew(0.3deg);
    }
    80% {
      clip: rect(12px, 9999px, 18px, 0);
      transform: skew(0.3deg);
    }
    85% {
      clip: rect(56px, 9999px, 72px, 0);
      transform: skew(0.3deg);
    }
    90% {
      clip: rect(56px, 9999px, 32px, 0);
      transform: skew(0.3deg);
    }
    95% {
      clip: rect(88px, 9999px, 76px, 0);
      transform: skew(0.3deg);
    }
    100% {
      clip: rect(56px, 9999px, 64px, 0);
      transform: skew(0.3deg);
    }
  }
  @keyframes glitch-2 {
    0% {
      clip: rect(85px, 9999px, 100px, 0);
      transform: skew(0.6deg);
    }
    5% {
      clip: rect(20px, 9999px, 60px, 0);
      transform: skew(0.6deg);
    }
    10% {
      clip: rect(30px, 9999px, 90px, 0);
      transform: skew(0.6deg);
    }
    15% {
      clip: rect(80px, 9999px, 90px, 0);
      transform: skew(0.6deg);
    }
    20% {
      clip: rect(80px, 9999px, 85px, 0);
      transform: skew(0.6deg);
    }
    25% {
      clip: rect(75px, 9999px, 60px, 0);
      transform: skew(0.6deg);
    }
    30% {
      clip: rect(0px, 9999px, 10px, 0);
      transform: skew(0.6deg);
    }
    35% {
      clip: rect(85px, 9999px, 90px, 0);
      transform: skew(0.6deg);
    }
    40% {
      clip: rect(80px, 9999px, 85px, 0);
      transform: skew(0.6deg);
    }
    45% {
      clip: rect(75px, 9999px, 60px, 0);
      transform: skew(0.6deg);
    }
    50% {
      clip: rect(0px, 9999px, 10px, 0);
      transform: skew(0.6deg);
    }
    55% {
      clip: rect(85px, 9999px, 90px, 0);
      transform: skew(0.6deg);
    }
    60% {
      clip: rect(80px, 9999px, 85px, 0);
      transform: skew(0.6deg);
    }
    65% {
      clip: rect(75px, 9999px, 60px, 0);
      transform: skew(0.6deg);
    }
    70% {
      clip: rect(0px, 9999px, 10px, 0);
      transform: skew(0.6deg);
    }
    75% {
      clip: rect(85px, 9999px, 90px, 0);
      transform: skew(0.6deg);
    }
    80% {
      clip: rect(80px, 9999px, 85px, 0);
      transform: skew(0.6deg);
    }
    85% {
      clip: rect(75px, 9999px, 60px, 0);
      transform: skew(0.6deg);
    }
    90% {
      clip: rect(0px, 9999px, 10px, 0);
      transform: skew(0.6deg);
    }
    95% {
      clip: rect(85px, 9999px, 90px, 0);
      transform: skew(0.6deg);
    }
    100% {
      clip: rect(80px, 9999px, 85px, 0);
      transform: skew(0.6deg);
    }
  }
`;

const FuturisticSubText = styled(motion.p)`
  font-size: 1.0rem;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.9;
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 1.5px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NeonButton = styled(motion.a)`
  margin-top: 40px;
  padding: 15px 30px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #00f260;
  background-color: transparent;
  border: 2px solid #00f260;
  border-radius: 30px;
  box-shadow: 0 0 15px #00f260, 0 0 25px #00f260, 0 0 35px #00f260;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #00f260;
    box-shadow: 0 0 15px #00f260, 0 0 25px #00f260, 0 0 35px #00f260;
  }
`;

const HeroSection = () => {
  return (
    <FuturisticHeroContainer id='introduction'>
      <GlitchText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to the Future
      </GlitchText>
      <FuturisticSubText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Innovative Solutions for a Digital World
      </FuturisticSubText>
      <NeonButton
        href="https://drive.google.com/file/d/1AMlY6skdpI8DkT30lO2yhsimPm20Vkj3/view?usp=sharing"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 25px #00f260, 0 0 35px #00f260, 0 0 45px #00f260' }}
        whileTap={{ scale: 0.95 }}
      >
        Resume
      </NeonButton>
    </FuturisticHeroContainer>
  );
};

export default HeroSection;
