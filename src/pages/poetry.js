import * as React from "react"
import { graphql } from "gatsby"
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from '../components/Link';
import Layout from "../components/Layout";

const Poetry = ({ data, location }) => {
    const poems = data.allMarkdownRemark.nodes

    if (poems.length === 0) {
        return (
            <Layout location={location} title="Poetry">
                <Typography variant="body1">There are no poems yet.</Typography>
            </Layout>
        )
    }

    return (
        <Layout location={location} title="Poetry">
            <List>
                {poems.map((poem) => {
                    const title = poem.frontmatter.title || poem.fields.slug

                    return (
                        <ListItem key={`/poetry${poem.fields.slug}`}>
                            <ListItemText
                                primary={
                                    <Link
                                        to={`/poetry${poem.fields.slug}`}
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
                                        >
                                            {poem.frontmatter.date}
                                        </Typography>
                                        <Typography
                                            dangerouslySetInnerHTML={{
                                                __html: poem.frontmatter.description || poem.excerpt,
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

export default Poetry

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        filter: {fileAbsolutePath: {glob: "**/content/poetry/**/*.md"}}
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


