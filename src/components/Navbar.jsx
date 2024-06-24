import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 1rem 2rem;
  margin-bottom: 0.1rem; /* Adjusted margin-bottom to reduce gap */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const WhiteNavLink = styled(NavLink)`
  color: #FFF; // White color
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>Furniture Store</h1>
      <NavLinks>
        <WhiteNavLink href="#">Home</WhiteNavLink>
        <WhiteNavLink href="#">Services</WhiteNavLink>
        <WhiteNavLink href="#">Contact Us</WhiteNavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;