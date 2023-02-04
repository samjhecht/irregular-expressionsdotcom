/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */


const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)



// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)
const hiddenPageTemplate = path.resolve(`./src/templates/hidden-page.js`)
const poemTemplate = path.resolve(`./src/templates/poem.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const resultBlog = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {glob: "**/content/blog/**/*.md"}}
        sort: { frontmatter: { date: ASC } }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (resultBlog.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      resultBlog.errors
    )
    return
  }

  const blogPosts = resultBlog.data.allMarkdownRemark.nodes

  // Create blog post pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].id
      const nextPostId = index === blogPosts.length - 1 ? null : blogPosts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Get all markdown blog posts sorted by date
  const resultHiddenPages = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {glob: "**/content/hidden-pages/**/*.md"}}
        sort: { frontmatter: { date: ASC } }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (resultHiddenPages.errors) {
    reporter.panicOnBuild(
      `There was an error loading posts`,
      resultHiddenPages.errors
    )
    return
  }

  const hiddenPages = resultHiddenPages.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  if (hiddenPages.length > 0) {
    hiddenPages.forEach((hiddenPage, index) => {
      const previousHiddenPageId = index === 0 ? null : hiddenPages[index - 1].id
      const nextHiddenPageId = index === hiddenPages.length - 1 ? null : hiddenPages[index + 1].id

      createPage({
        path: `/hidden-pages${hiddenPage.fields.slug}`,
        component: hiddenPageTemplate,
        context: {
          id: hiddenPage.id,
          previousHiddenPageId,
          nextHiddenPageId,
        },
      })
    })
  }

  // Get all markdown poetry posts sorted by date
  const poetryResult = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: {glob: "**/content/poetry/**/*.md"}}
          sort: { frontmatter: { date: ASC } }
          limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  
  if (poetryResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your poetry posts`,
      poetryResult.errors
    )
    return
  }

  const poems = poetryResult.data.allMarkdownRemark.nodes

  // Create pages for each poem in "content/poetry" dir
  // But only if there's at least one markdown file found at "content/poetry" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (poems.length > 0) {
    poems.forEach((poem, index) => {
      const previousPoemId = index === 0 ? null : poems[index - 1].id
      const nextPoemId = index === poems.length - 1 ? null : poems[index + 1].id

      createPage({
        path: `/poetry${poem.fields.slug}`,
        component: poemTemplate,
        context: {
          id: poem.id,
          // title: poem.node.frontmatter.title,
          previousPoemId,
          nextPoemId,
        },
      })
    })
  }

}


/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
  
    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js
  
    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
      type SiteSiteMetadata {
        author: Author
        siteUrl: String
        social: Social
      }
  
      type Author {
        name: String
        summary: String
      }
  
      type Social {
        twitter: String
      }
  
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
        fields: Fields
      }
  
      type Frontmatter {
        title: String
        description: String
        date: Date @dateformat
        images: [File]
        status: String
      }
  
      type File {
        childImageSharp: ChildImageSharp
      }
      
      type ChildImageSharp {
        fluid(maxWidth: Int, quality: Int): Fluid
      }
      
      type Fluid {
        aspectRatio: Float
        src: String
        srcSet: String
        sizes: String
      }

      type Fields {
        slug: String
      }
    `)
  }