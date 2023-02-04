import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const HiddenPageTemplate = ({
    data: { previous, next, site, markdownRemark: hiddenPage },
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
                    {hiddenPage.frontmatter.title}
                </Typography>
                <Typography variant="subtitle1" sx={{
                    // fontSize: "1.1rem",
                    paddingBottom: "1rem",
                }}>
                    {hiddenPage.frontmatter.date}
                </Typography>
                <br />
                <section dangerouslySetInnerHTML={{ __html: hiddenPage.html }} itemProp="articleBody" />
            </Box>
        </Layout>
    );
};

export default HiddenPageTemplate

export const pageQuery = graphql`
  query HiddenPageBySlug(
    $id: String!
    $previousHiddenPageId: String
    $nextHiddenPageId: String
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
    previous: markdownRemark(id: { eq: $previousHiddenPageId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextHiddenPageId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
