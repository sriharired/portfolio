// components/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #f0f4f8, #e9eef3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  max-width: 980px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.7rem;
  margin-bottom: 22px;
  color: #2c3e50;
  letter-spacing: 1.5px;
  font-weight: 800;
  text-align: center;
  width: 100%;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.85;
  margin: 0 0 18px 0;
  max-width: 900px;
  color: #34495e;

  strong {
    color: #2c3e50;
    font-weight: 700;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 18px;
  width: 100%;
  max-width: 1100px;
`;

const SkillsTitle = styled.h3`
  width: 100%;
  text-align: center;
  margin: 10px 0 18px 0;
  color: #2c3e50;
  letter-spacing: 0.6px;
`;

const Skill = styled(motion.div)`
  background: linear-gradient(135deg, #00f260, #0575e6);
  color: #fff;
  padding: 12px 25px;
  border-radius: 30px;
  margin: 10px;
  font-size: 1rem;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  cursor: default;
  transition: all 0.3s ease;
`;

const skillVariants = {
  hover: {
    scale: 1.08,
    boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.25 },
  },
  tap: { scale: 0.97 },
};

const About = () => {
  const skills = [
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Java",
    "Python",
    "Artificial Intelligence",
    "Machine Learning",
  ];

  return (
    <AboutSection id="about">
      <Title
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        About Me
      </Title>

      <ContentContainer>
        <TextContainer>
          <Paragraph
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            I’m a <strong>Full-Stack Developer</strong> with strong experience in{" "}
            <strong>AI/ML</strong>, focused on building clean, modern, and scalable
            products that help businesses grow. I work end-to-end—from designing
            polished UI and responsive web apps to building secure backends, APIs,
            and database systems that perform reliably in production.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            If you’re looking to ship an MVP fast or upgrade an existing product, I
            can help you deliver features like dashboards, authentication, payments,
            admin panels, automation workflows, and AI-powered capabilities such as
            recommendations, resume/job matching, smart search, and chat assistants.
            I prioritize <strong>clear communication</strong>,{" "}
            <strong>clean code</strong>, and <strong>on-time delivery</strong>—so
            you get a solution that’s not just working, but built to scale.
          </Paragraph>

          <Paragraph
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <strong>Need a reliable developer for your next project?</strong> I’m
            available for freelance work, startup builds, and long-term
            collaborations.
          </Paragraph>
        </TextContainer>
      </ContentContainer>

      <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
        {skills.map((skill, index) => (
          <Skill
            key={index}
            variants={skillVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            {skill}
          </Skill>
        ))}
      </SkillsContainer>
    </AboutSection>
  );
};

export default About;
