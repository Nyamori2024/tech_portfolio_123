import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ padding: 4, textAlign: 'center', backgroundColor: '#e3f2fd' }}
        >
            <Typography variant="h4" sx={{ marginBottom: 2 }}>About Me</Typography>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: '12px' }}>
                <Typography variant="body1">
                    I am a Fullstack developer with a passion for creating stunning and functional applications. 
                    I have experience in various technologies and thrive on solving complex problems.
                </Typography>
            </Paper>
        </Box>
    );
};

export default AboutMe;