import * as React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function StickyFooter() {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                }}
            >
                <Container maxWidth="sm">
                    <Typography color="text.black" sx={{fontSize: "0.92rem", whiteSpace: "nowrap"}}>
                        Copyright © {new Date().getFullYear()}, Julius Hecht.
                        {` `}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

