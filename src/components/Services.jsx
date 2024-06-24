// src/components/Services.js
import React from 'react';
import styled from 'styled-components';

// Import your images from the assets folder
import livingRoomImage from '../assets/living-room.jpg';
import bedroomImage from '../assets/bedroom.jpg';
import diningRoomImage from '../assets/dining-room.jpg';
import kitchenImage from '../assets/kitchen.jpg'; // New image for kitchen

const ServicesContainer = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 2rem;
  color: ${({ theme }) => theme.textColor};
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.div`
  background-image: url(${({ bgImage }) => bgImage});
  background-size: 100% 100%; /* Ensure image covers the entire container */
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textColor};
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

const Services = () => {
  return (
    <ServicesContainer>
      <ServiceGrid>
        <ServiceItem bgImage={livingRoomImage}>
          <ServiceTitle>Living Room Furniture</ServiceTitle>
          <ServiceDescription>Discover our stylish collection for your living room.</ServiceDescription>
        </ServiceItem>
        <ServiceItem bgImage={bedroomImage}>
          <ServiceTitle>Bedroom Furniture</ServiceTitle>
          <ServiceDescription>Explore comfortable and elegant bedroom furniture.</ServiceDescription>
        </ServiceItem>
        <ServiceItem bgImage={kitchenImage}>
          <ServiceTitle>Kitchen Furniture</ServiceTitle>
          <ServiceDescription>Find functional and modern kitchen furniture.</ServiceDescription>
        </ServiceItem>
        <ServiceItem bgImage={diningRoomImage}>
          <ServiceTitle>Dining Room Sets</ServiceTitle>
          <ServiceDescription>Find the perfect dining room set for your home.</ServiceDescription>
        </ServiceItem>
      </ServiceGrid>
    </ServicesContainer>
  );
};

export default Services;
