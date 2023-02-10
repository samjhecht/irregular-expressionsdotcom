import * as React from "react"
import Header from "./Header"
import Container from '@mui/material/Container';
import StickyFooter from '../components/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const Layout = ({ location, title, children }) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container
                    maxWidth="sm"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        margin: '0 auto',
                        padding: '2.5rem 1.25rem',
                        // maxWidth: '42rem',
                        alignContent: 'center',
                        // justifyContent: 'flex-start',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Header location={location} />
                    <Container component="main" sx={{ mb: 2 }} maxWidth="sm">
                        {children}
                    </Container>
                    <StickyFooter />
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Layout

