import * as React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import EmailSignup from '../components/EmailSignup';
import { Typography, Container } from '@mui/material';

const Subscribe = ({ location }) => {

    return (
        <Layout location={location}>
            <Container >
            <Typography alignText="left" alignContent="left" justifyContent="left" sx={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                paddingBottom: "1rem",
            }}
            >
                Sign up
            </Typography>

            <EmailSignup />
            </Container>
        </Layout >
    );
}

export default Subscribe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
