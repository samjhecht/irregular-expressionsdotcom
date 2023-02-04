import * as React from 'react';
import { graphql } from "gatsby";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from "../components/Layout";
import Link from '../components/Link';
import Grid2 from '@mui/material/Unstable_Grid2'
import Stack from '@mui/material/Stack';

const About = ({ location }) => {

  return (
    <Layout location={location}>
      <Box>
        <Typography
          sx={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            paddingBottom: "1rem",
          }}
        >
          About
        </Typography>
        <Grid2 container spacing={2} disableEqualOverflow>
          <Grid2 xs={7}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-evenly"
              spacing={(4)}
              sx={{maxWidth: "100%", maxHeight: "100%", }}
            >
              <Typography variant="body1">
                Welcome to Irregular-Expressions.com!  I'm <strong>Julius Hecht</strong>.&nbsp;&nbsp;
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
                minWidth: "200px",
                maxWidth: "100%",
                maxHeight: "100%",
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
