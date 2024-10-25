import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
    { name: "Client One", feedback: "Fantastic work! Very pleased with the results." },
    { name: "Client Two", feedback: "Great communication and technical skills." },
    { name: "Client Three", feedback: "Delivered everything on time. Highly recommend!" },
];

const Testimonials = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h4" textAlign="center">Testimonials</Typography>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {testimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            component={motion.div}
                            initial={{ opacity: 0, rotate: -5 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
                            sx={{ padding: 2, borderRadius: '12px', textAlign: 'center', backgroundColor: '#ffffff' }}
                        >
                            <Typography variant="h6">{testimonial.name}</Typography>
                            <Typography variant="body2" sx={{ marginTop: 1 }}>{testimonial.feedback}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Testimonials;