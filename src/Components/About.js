// components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #f0f4f8, #e9eef3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin-bottom: 40px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 1023px){
    flex-direction: column;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 250px;
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    max-width: 200px; /* Smaller image for mobile */
    margin-bottom: 20px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TextContainer = styled.div`
  flex: 2;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1024px){
    margin-left: 5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
  max-width: 600px;
  color: #34495e;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

const Skill = styled(motion.div)`
  background: linear-gradient(135deg, #00f260, #0575e6);
  color: #fff;
  padding: 12px 25px;
  border-radius: 30px;
  margin: 10px;
  font-size: 1rem;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
`;

const skillVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const About = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Python', 'Machine Learning'];
  const profileImage = `${process.env.PUBLIC_URL}/profilepic.jpg`; // Replace with your image URL

  return (
    <AboutSection id="about">
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </Title>
      <ContentContainer>
        <ImageContainer
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <StyledImage src={profileImage} alt="Profile Picture" />
        </ImageContainer>
        <TextContainer>
          <Paragraph
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            I am a Master’s student in Computer Science at the University of Massachusetts, Boston.
            I have a passion for developing innovative programs that expedite the efficiency and
            effectiveness of organizational success. I’m skilled in web development, machine learning,
            and software engineering.
          </Paragraph>
        </TextContainer>
      </ContentContainer>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            variants={skillVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {skill}
          </Skill>
        ))}
      </SkillsContainer>
    </AboutSection>
  );
};

export default About;
