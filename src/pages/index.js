import * as React from 'react';
import { graphql } from "gatsby";
import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout';

export default function Index({ data, location }) {

  return (
    <Layout location={location}>
      <Box sx={{
        my: 4,
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <Typography
          component="body"
          gutterBottom
          sx={{
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          At my window
          <br />
          Watching the sun go
          <br />
          Hoping the stars know
          <br />
          It's time to shine...
          <br />
          <br />
        </Typography>
        <Typography
          component="body"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontStyle: 'italic',
            whiteSpace: 'nowrap',
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Townes Van Zandt
        </Typography>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

