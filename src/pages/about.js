import * as React from 'react';
import { graphql } from "gatsby";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from "../components/Layout";
import Link from '../components/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const About = ({ location }) => {

  return (
    <Layout location={location}>
      <Typography
        sx={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          paddingBottom: "1rem",
        }}
      >
        About
      </Typography>
      <Stack direction="row" spacing={1}>
        <Stack direction="column" spacing={4}>
          <Typography variant="body1">
            Welcome to Irregular-Expressions.com!&nbsp;&nbsp; I'm <strong>Julius Hecht</strong>.&nbsp;&nbsp;
            I made this site so I could publish my poetry and other stuff I feel like writing.&nbsp;&nbsp;
            Now, please excuse me while I express myself.
            {` `}
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={6}
          >
            <Link href="https://github.com/samjhecht">
              <Box
                component="img"
                sx={{
                  width: "40px",
                  height: "40px",
                }}
                src="../images/github_icon_128.png"
                alt="Github logo"
                loading="eager"
              />
            </Link>
            <Link href="https://instagram.com/juliushecht">
              <Box
                component="img"
                sx={{
                  width: "40px",
                  height: "40px",
                }}
                src="../images/instagram_logo_128.png"
                alt="Instagram logo"
                loading="eager"
              />
            </Link>
            <Link href="https://linkedin.com/in/sam-hecht-4ab65713/">
              <Box
                component="img"
                sx={{
                  width: 40,
                  height: 40,
                }}
                src="../images/linkedin_logo_128.png"
                alt="LinkedIn logo"
                loading="eager"
              />
            </Link>
          </Stack>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Box
            component="img"
            src="../images/with_david_800_915.jpg"
            sx={{
              minWidth: "200px",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "100%"
            }}
            alt="Julius Hecht"
            loading="eager"
          >
          </Box>
        </Stack>
      </Stack>
    </Layout >
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
