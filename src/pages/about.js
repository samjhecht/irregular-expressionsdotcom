import * as React from 'react';
import { graphql, Link as GatsbyLink } from "gatsby";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Container from '@mui/material/Container';
import Link from '../components/Link';
import Grid2 from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material/Avatar';

const About = ({ location }) => {

  return (
    <Layout location={location}>
      <Box>
        <Typography
          variant='h6'
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          About
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 xs={7}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-evenly"
              spacing={(2, 4)}
            >
              <Typography>
                Welcome to Irregular-Expressions.com!&nbsp;&nbsp;I'm <strong>Julius Hecht</strong>.&nbsp;&nbsp;
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

          </Grid2>
          <Grid2 xs={5}>
            <Box
              component="img"
              src="../images/with_david_800_915.jpg"
              sx={{
                width: 300,
                minWidth: "200px",
                borderRadius: "100%"
              }}
              alt="Julius Hecht"
              loading="eager"
            >
            </Box>
          </Grid2>
        </Grid2>
      </Box>
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
