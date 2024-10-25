import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar'; // Import Navbar component
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects'; // Import Projects component
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Normalize styles for consistent look */}
            <Navbar />
            <Box id="hero">
                <Hero />
            </Box>
            <Box id="about">
                <AboutMe />
            </Box>
            <Box id="skills">
                <Skills />
            </Box>
            <Box id="projects">
                <Projects /> {/* Newly added Projects section */}
            </Box>
            <Box id="testimonials">
                <Testimonials />
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default App;