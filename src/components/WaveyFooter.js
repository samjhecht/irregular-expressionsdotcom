import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CssWave from './CssWave';

export default function WaveyFooter() {

    return (
        <>
            <Box
                component="footer"
                maxWidth="100%"
                sx={{
                    maxWidth: "100%",
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    bottom: "0",
                    // position: "fixed",
                }}
            >
                <Container maxWidth="100%">
                    <CssWave />
                    <Typography
                        color="white"
                        sx={{
                            fontSize: "0.92rem",
                            textAlign: "center", 
                            pt: "5px",
                            pb: "0px",
                            whiteSpace: "nowrap", 
                            backgroundColor: "#0018d1", 
                            maxWidth: "100%",
                            opacity: "1"
                        }}>
                        Copyright © {new Date().getFullYear()}, Julius Hecht.
                        {` `}
                    </Typography>
                </Container>
            </Box>
        </>
    );
};