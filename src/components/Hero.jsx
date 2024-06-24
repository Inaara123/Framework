
// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

// Import your hero image from the assets folder
import heroImage from '../assets/hero-image.jpg';

const HeroContainer = styled.section`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  padding: 3rem; /* Adjusted padding to reduce gap */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColorDark};
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Welcome to Our Furniture Store</HeroTitle>
        <HeroDescription>Discover the latest trends in furniture design and find inspiration for your home.</HeroDescription>
        <HeroButton>Explore Now</HeroButton>
      </HeroContent>
      <HeroImage src={heroImage} alt="Hero Image" />
    </HeroContainer>
  );
};

export default Hero;