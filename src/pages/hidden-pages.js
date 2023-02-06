import * as React from "react"
import { graphql } from "gatsby"
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from '../components/Link';
import Layout from "../components/Layout";

const HiddenPages = ({ data, location }) => {
    const hiddenPages = data.allMarkdownRemark.nodes

    if (hiddenPages.length === 0) {
        return (
            <Layout location={location} title="Hidden Pages">
                <Typography variant="body1">There are no hiddenPages yet.</Typography>
            </Layout>
        )
    }

    return (
        <Layout location={location} title="Hidden Pages">
            <List>
                {hiddenPages.map((hiddenPage) => {
                    const title = hiddenPage.frontmatter.title || hiddenPage.fields.slug

                    return (
                        <ListItem key={`/hidden-pages${hiddenPage.fields.slug}`}>
                            <ListItemText
                                primary={
                                    <Link
                                        to={`/hidden-pages${hiddenPage.fields.slug}`}
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
                                            {hiddenPage.frontmatter.date}
                                        </Typography>
                                        <Typography
                                            dangerouslySetInnerHTML={{
                                                __html: hiddenPage.frontmatter.description || hiddenPage.excerpt,
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

export default HiddenPages

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {glob: "**/content/hidden-pages/**/*.md"}}
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
          images {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
