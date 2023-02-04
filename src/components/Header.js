import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Link from '../components/Link';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';

function Header(props) {
    const { title, location } = props;
    const pathname = location.pathname
    const pathnameArray = pathname.split('/')
    const page = pathnameArray[1]

    return (
        <>
            <Box
                component="header"
                sx={{
                    backgroundColor: 'primary.white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="headerTitle"
                    sx={{
                        fontFamily: 'Vulf Sans',
                        fontWeight: 'bold',
                        fontStyle: 'normal',
                        // fontSize: '2rem',
                        whiteSpace: 'nowrap',
                    }}>
                    <Link
                        to="/"
                        sx={{
                            color: 'primary.black',
                            textDecoration: 'none',
                        }}
                    >Irregular Expressions</Link>
                </Typography>
            </Box>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Typography
                    variant='headerNav'
                    fontWeight={page === 'poetry' ? 'bold' : 'normal'} fontStyle={page === 'poetry' ? 'italic' : 'normal'}
                    sx={{
                        fontSize: '1.5rem',
                    }}
                >
                    <Link to="/poetry" sx={{ color: 'primary.black', textDecoration: 'none', }}>Poetry</Link>
                </Typography>
                <Typography
                variant='headerNav'
                    fontWeight={page === 'blog' ? 'bold' : 'normal'} fontStyle={page === 'blog' ? 'italic' : 'normal'}
                    sx={{
                        fontSize: '1.5rem',
                    }}
                >
                    <Link to="/blog" sx={{ color: 'primary.black', textDecoration: 'none', }}>Blog</Link>
                </Typography>
                <Typography
                variant='headerNav'
                    fontWeight={page === 'about' ? 'bold' : 'normal'} fontStyle={page === 'about' ? 'italic' : 'normal'}
                    sx={{
                        fontSize: '1.5rem',
                    }}
                >
                    <Link to="/about" sx={{ color: 'primary.black', textDecoration: 'none', }}>About</Link>
                </Typography>
            </Stack>
        </>
    );
}

Header.propTypes = {
    // sections: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         title: PropTypes.string.isRequired,
    //         url: PropTypes.string.isRequired,
    //     }),
    // ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;