import * as React from 'react';
import PropTypes from 'prop-types';
import Link from '../components/Link';
import { Typography, Stack } from '@mui/material';

function Header(props) {
    const { location } = props;
    const pathname = location.pathname
    const pathnameArray = pathname.split('/')
    const page = pathnameArray[1]

    return (
        <>
            <Stack direction="column" spacing={2} sx={{mb: 8, display: "flex", alignContent: "center", justifyContent: "center", alignItems:"center"}}>
                <Typography
                    variant="h4"
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