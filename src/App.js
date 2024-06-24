// App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, themes } from './themeManager';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding: 2rem;
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.theme1); // Initial theme

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer>
        <GlobalStyles />
        <Navbar changeTheme={changeTheme} />
        <MainContent>
          <HeroSection />
          <ServicesSection />
          <Testimonials />
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
