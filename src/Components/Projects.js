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
  &:hover {
    background: #0575e6;
    transform: translateY(-5px);
    color: #ffffff;
  }
`;

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects.',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Machine Learning Project',
    description: 'A project utilizing machine learning to predict housing prices.',
    link: 'https://your-ml-project-link.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce website with payment integration.',
    link: 'https://your-ecommerce-link.com',
  },
  {
    title: 'Weather App',
    description: 'A web application that provides real-time weather information and forecasts.',
    link: 'https://your-weather-app-link.com',
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with user authentication and group chat functionality.',
    link: 'https://your-chat-app-link.com',
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
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
