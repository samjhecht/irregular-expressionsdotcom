import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '../components/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


const PoemTemplate = ({
    data: { previous, next, site, markdownRemark: poem },
    location,
}) => {
    const siteTitle = site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <Box itemScope itemType="http://schema.org/Article">
                <Typography itemProp="headline" sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    paddingBottom: "1rem",
                }}>
                    {poem.frontmatter.title}
                </Typography>
                <Typography variant="subtitle1" sx={{
                    paddingBottom: "1rem",
                    paddingTop: "0.5rem"
                }}>
                    {poem.frontmatter.date}
                </Typography>
                <br />
                <section dangerouslySetInnerHTML={{ __html: poem.html }} itemProp="articleBody" />
                <Box mt={4}>
                    <br /><br /><br />
                    <Divider light />
                    <br />
                </Box>
            </Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{
                    padding: 0,
                }}>
                <Box>
                    {previous && (
                        <Link to={`/poetry${previous.fields.slug}`} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </Box>
                <Box>
                    {next && (
                        <Link to={`/poetry${next.fields.slug}`} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </Box>
            </Stack>
        </Layout>
    );
};

export default PoemTemplate

export const pageQuery = graphql`
  query PoetryPostBySlug(
    $id: String!
    $previousPoemId: String
    $nextPoemId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPoemId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPoemId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
