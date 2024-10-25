import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(https://source.unsplash.com/random/1920x1080)',
                backgroundSize: 'cover',
                color: 'white',
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Typography variant="h2">Welcome to My Portfolio</Typography>
            <Button 
                variant="contained" 
                color="secondary" 
                sx={{ marginTop: 2, '&:hover': { backgroundColor: '#ff4081', transform: 'scale(1.05)' } }}
                component={motion.button}
                whileHover={{ scale: 1.1 }}
            >
                Learn More
            </Button>
        </Box>
    );
};

export default Hero;