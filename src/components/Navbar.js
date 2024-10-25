import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll'; // For smooth scrolling

const Navbar = () => {
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Portfolio
                </Typography>
                <Button color="inherit" component={Link} to="about" smooth>About Me</Button>
                <Button color="inherit" component={Link} to="skills" smooth>Skills</Button>
                <Button color="inherit" component={Link} to="projects" smooth>Projects</Button> {/* Added Projects link */}
                <Button color="inherit" component={Link} to="testimonials" smooth>Testimonials</Button>
                <Button color="inherit" component={Link} to="contact" smooth>Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;