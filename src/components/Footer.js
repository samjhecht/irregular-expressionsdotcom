import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


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
                    <Typography variant="body2" color="text.secondary">
                        Copyright © {new Date().getFullYear()}, Julius Hecht.
                        {` `}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

