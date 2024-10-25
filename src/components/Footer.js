import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component={motion.footer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ backgroundColor: '#282c34', color: 'white', padding: 4, textAlign: 'center' }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="body2">Email: example@example.com</Typography>
                    <Typography variant="body2">Phone: (123) 456-7890</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Follow Me</Typography>
                    <Link href="https://github.com" color="inherit" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                        <GitHub sx={{ marginRight: 1 }} /> GitHub
                    </Link>
                    <Link href="https://linkedin.com" color="inherit" target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center' }}>
                        <LinkedIn sx={{ marginRight: 1 }} /> LinkedIn
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">About</Typography>
                    <Typography variant="body2">© {new Date().getFullYear()} Your Name. All rights reserved.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;