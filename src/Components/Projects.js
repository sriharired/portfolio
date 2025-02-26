// components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 100px 20px;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #ffffff;
  letter-spacing: 1.5px;
  font-weight: bold;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto; /* Center the grid */
`;

const ProjectCard = styled(motion.div)`
  background-color: #203a43;
  padding: 25px 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 350px;
  text-align: left;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
  }
  &:hover::before {
    opacity: 0.9;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 150%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: skewX(-20deg);
    transition: all 0.5s ease;
    opacity: 0;
    pointer-events: none; /* Prevents interaction with this pseudo-element */
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #00f260;
  margin-bottom: 15px;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #00f260;
  color: #0f2027;
  font-weight: bold;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  position: relative;
  z-index: 1; /* Ensure this is above the ::before pseudo-element */
  &:hover {
    background: #00f260;
    transform: translateY(-5px);
    color: #ffffff;
    cursor: pointer;
  }
`;

const projects = [
  {
    title: 'Detecting Pneumonia Using X-Ray Images',
    description: 'Developed a machine learning model to predict Pneumonia using X-rays. Models used ResNet50, MobileNet V2, and Custom CNN.',
    link: 'https://github.com/sriharired/AIML-For-Pneumonia-Detetion',
  },
  {
    title: 'Indian History Mythologies Website',
    description: 'Developed a fully interactive website with quiz functionality using React.js, JSON, and standardweb technologies.',
    link: 'https://github.com/sriharired/IHM',
  },
  {
    title: 'Air Quality Predictor',
    description: 'A react web application that provides air quality prediction using machine learning and weather data.',
    link: '#airquality',
  },
  {
    title: 'Metro Management System',
    description:'A JSP web application for metro management like adding/update/delete stations,traines,routes from admin. User Can search trains, route, timmings etc. it has special feauture of providing or check metro card balance.',
    link:'https://github.com/sriharired/metrorail-management-system',
  },
  {
    title: 'Online yoga training center',
    description: 'A react application to book virtual yoga slots and adding course.',
    link: 'https://online-yoga-training-center.vercel.app/',
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink href={project.link} target="_blank">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
