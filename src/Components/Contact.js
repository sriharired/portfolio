import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 100px 20px;
  background: #1a1a2e;
  background-image: linear-gradient(315deg, #1a1a2e 0%, #16213e 74%);
  text-align: center;
  color: #ffffff;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  margin-bottom: 50px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const Form = styled(motion.form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px; /* Adjust padding for mobile view */
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.1);

  &::placeholder {
    color: #b0bec5;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 12px; /* Adjust padding for smaller screens */
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }
`;

const TextArea = styled(motion.textarea)`
  grid-column: 1 / 3;
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  height: 150px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.1);

  &::placeholder {
    color: #b0bec5;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    grid-column: 1 / 1; /* Ensure it spans only one column on mobile */
    padding: 12px; /* Adjust padding for smaller screens */
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }
`;

const SubmitButton = styled(motion.button)`
  grid-column: 1 / 3;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  background: #e94560;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #16213e;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    grid-column: 1 / 1; /* Ensure it spans only one column on mobile */
    padding: 12px 20px; /* Adjust padding for smaller screens */
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;

const FloatingShapes = styled.div`
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
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  opacity: 0.7;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
  };

  return (
    <ContactSection id="contact">
      <FloatingShapes>
        <Shape
          initial={{ x: -150, y: -150 }}
          animate={{ x: 400, y: 400 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        />
        <Shape
          initial={{ x: 450, y: -200 }}
          animate={{ x: -200, y: 300 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
        />
      </FloatingShapes>
      <Title initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        Get in Touch
      </Title>
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
        <SubmitButton
          whileHover={{ scale: 1.1, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)' }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Send Message
        </SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default Contact;
