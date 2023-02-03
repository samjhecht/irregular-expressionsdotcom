import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../components/Layout';
import { graphql } from "gatsby";

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

