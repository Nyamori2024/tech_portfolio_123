import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <h2>Contact Me</h2>
            <form>
                <TextField fullWidth label="Your Name" variant="outlined" margin="normal" />
                <TextField fullWidth label="Your Email" variant="outlined" margin="normal" />
                <TextField fullWidth label="Your Message" variant="outlined" margin="normal" multiline rows={4} />
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    component={motion.button}
                    whileHover={{ scale: 1.1, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                >
                    Send Message
                </Button>
            </form>
        </Box>
    );
};

export default Contact;