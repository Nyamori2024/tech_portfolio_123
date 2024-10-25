import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Project One",
        description: "This is a brief description of Project One.",
        image: "https://source.unsplash.com/random/400x300?project1",
        link: "https://example.com/project1",
    },
    {
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        image: "https://source.unsplash.com/random/400x300?project2",
        link: "https://example.com/project2",
    },
    {
        title: "Project Three",
        description: "This is a brief description of Project Three.",
        image: "https://source.unsplash.com/random/400x300?project3",
        link: "https://example.com/project3",
    },
];

const Projects = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#e3f2fd' }}>
            <Typography variant="h4" textAlign="center" sx={{ marginBottom: 2 }}>Projects</Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} // Start off-screen
                            animate={{ opacity: 1, y: 0 }} // Slide in
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                        >
                            <Card 
                                sx={{ 
                                    height: '100%', 
                                    '&:hover': { 
                                        boxShadow: '0 6px 24px rgba(0,0,0,0.3)', 
                                        transform: 'scale(1.02)', // Scale effect on hover
                                        transition: 'transform 0.3s ease-in-out' 
                                    } 
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    alt={project.title}
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>{project.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">{project.description}</Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 2 }}>
                                    <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener">
                                        View Project
                                    </Button>
                                </Box>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;