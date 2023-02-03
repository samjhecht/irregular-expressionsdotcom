import * as React from "react"
import Header from "./Header"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import StickyFooter from '../components/Footer';

const Layout = ({ location, title, children }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                margin: '0 auto',
                padding: '2.5rem 1.25rem',
                maxWidth: '42rem',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Header location={location} />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                {children}
            </Container>
            <StickyFooter />
        </Box>
    )
}

export default Layout

