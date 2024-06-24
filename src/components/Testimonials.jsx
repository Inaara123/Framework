// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';

// Import your images for testimonials (optional)
import testimonialImage1 from '../assets/testimonial-1.jpg';
import testimonialImage2 from '../assets/testimonial-2.jpg';
import testimonialImage3 from '../assets/testimonial-3.jpg';

const TestimonialsContainer = styled.section`
  background-color: #f9f9f9;
  color: #333;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.div`
  margin-top: auto;
`;

const TestimonialAuthorName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TestimonialAuthorTitle = styled.p`
  font-size: 1rem;
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialCard>
        <TestimonialImage src={testimonialImage1} alt="Testimonial Image" />
        <TestimonialText>
          "Great selection of furniture and excellent customer service! I found exactly what I was looking for at a reasonable price."
        </TestimonialText>
        <TestimonialAuthor>
          <TestimonialAuthorName>John Doe</TestimonialAuthorName>
          <TestimonialAuthorTitle>CEO, Company A</TestimonialAuthorTitle>
        </TestimonialAuthor>
      </TestimonialCard>
      <TestimonialCard>
        <TestimonialImage src={testimonialImage2} alt="Testimonial Image" />
        <TestimonialText>
          "I'm impressed with the quality of furniture and the quick delivery. Highly recommend this store for your home furnishing needs."
        </TestimonialText>
        <TestimonialAuthor>
          <TestimonialAuthorName>Jane Smith</TestimonialAuthorName>
          <TestimonialAuthorTitle>Designer, Company B</TestimonialAuthorTitle>
        </TestimonialAuthor>
      </TestimonialCard>
      <TestimonialCard>
        <TestimonialImage src={testimonialImage3} alt="Testimonial Image" />
        <TestimonialText>
          "The furniture here is stylish and durable. I've received many compliments on my new pieces. Will definitely shop here again."
        </TestimonialText>
        <TestimonialAuthor>
          <TestimonialAuthorName>Emily Johnson</TestimonialAuthorName>
          <TestimonialAuthorTitle>Manager, Company C</TestimonialAuthorTitle>
        </TestimonialAuthor>
      </TestimonialCard>
    </TestimonialsContainer>
  );
};

export default Testimonials;
