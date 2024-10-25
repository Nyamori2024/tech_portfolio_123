import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Material UI",
    "Framer Motion",
];

const Skills = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h4" textAlign="center">Skills</Typography>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                            component={motion.div}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
                            sx={{
                                padding: 2,
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                textAlign: 'center',
                                backgroundColor: '#ffffff',
                                transition: 'transform 0.3s, box-shadow 0.3s'
                            }}
                        >
                            <Typography variant="h6">{skill}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;