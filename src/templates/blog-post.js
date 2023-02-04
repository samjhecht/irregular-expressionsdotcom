import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '../components/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


const BlogPostTemplate = ({
    data: { previous, next, site, markdownRemark: post },
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
                    {post.frontmatter.title}
                </Typography>
                <Typography variant="subtitle1" sx={{
                    // fontSize: "1.1rem",
                    paddingBottom: "1rem",
                }}>
                    {post.frontmatter.date}
                </Typography>
                <br />
                <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
                <Box mt={4}>
                    <br /><br /><br />
                    <Divider light />
                    <br />
                </Box>
                {/* <footer></footer> */}
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
                        <Link to={`/blog${previous.fields.slug}`} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </Box>
                <Box>
                    {next && (
                        <Link to={`/blog${next.fields.slug}`} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </Box>
            </Stack>
        </Layout>
    );
};

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`