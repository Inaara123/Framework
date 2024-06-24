// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 2rem 1rem;
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.textColor};
    font-size: 1.5rem;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.secondaryColor};
    }
  }
`;

const FooterText = styled.p`
  font-size: calc(12px + 0.5vw);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">Services</FooterLink>
        <FooterLink href="#">Contact Us</FooterLink>
        <FooterLink href="#">About Us</FooterLink>
      </FooterLinks>
      <SocialIcons>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SocialIcons>
      <FooterText>&copy; 2023 Furniture Store. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
