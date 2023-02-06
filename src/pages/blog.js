import * as React from "react"
import { graphql } from "gatsby"
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from '../components/Link';
import Layout from "../components/Layout";

const Blog = ({ data, location }) => {
    const poems = data.allMarkdownRemark.nodes

    if (poems.length === 0) {
        return (
            <Layout location={location} title="Blog">
                <Typography variant="body1">There are no poems yet.</Typography>
            </Layout>
        )
    }

    return (
        <Layout location={location} title="Blog">
            <List>
                {poems.map((post) => {
                    const title = post.frontmatter.title || post.fields.slug

                    return (
                        <ListItem key={`/blog${post.fields.slug}`}>
                            <ListItemText
                                primary={
                                    <Link
                                        to={`/blog${post.fields.slug}`}
                                        sx={{
                                            color: 'primary.black',
                                            textDecoration: 'none',
                                        }}>
                                        <Typography
                                            variant="h5"
                                            sx={{ textDecoration: "none", fontWeight: 'bold' }}
                                        >
                                            {title}
                                        </Typography>
                                    </Link>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            variant="body2"
                                            color="text.black"
                                            sx={{paddingBottom: "1rem", paddingTop: "0.5rem"}}
                                        >
                                            {post.frontmatter.date}
                                        </Typography>
                                        <Typography
                                            dangerouslySetInnerHTML={{
                                                __html: post.frontmatter.description || post.excerpt,
                                            }}
                                            itemProp="description"
                                        />
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    )
                })}
            </List>
        </Layout>
    )
}

export default Blog

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: {glob: "**/content/blog/**/*.md"}
        frontmatter: { status: { ne: "draft" }}
      }
      sort: { frontmatter: { date: DESC } }
  ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */


