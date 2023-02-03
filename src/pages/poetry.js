// import * as React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const Poetry = ({ data, location }) => {
//     const poems = data.allMarkdownRemark.nodes

//     if (poems.length === 0) {
//         return (
//             <Layout location={location} title="Poetry">
//                 <p>
//                     There are no poems yet.
//                 </p>
//             </Layout>
//         )
//     }

//     return (
//         <Layout location={location} title="Poetry">
//             <ol style={{ listStyle: `none` }}>
//                 {poems.map(poem => {
//                     const title = poem.frontmatter.title || poem.fields.slug

//                     return (
//                         <li key={`/poetry${poem.fields.slug}`}>
//                             <article
//                                 className="post-list-item"
//                                 itemScope
//                                 itemType="http://schema.org/Article"
//                             >
//                                 <header>
//                                     <h2>
//                                         <Link to={`/poetry${poem.fields.slug}`} itemProp="url">
//                                             <span itemProp="headline">{title}</span>
//                                         </Link>
//                                     </h2>
//                                     <small>{poem.frontmatter.date}</small>
//                                 </header>
//                                 <section>
//                                     <div
//                                         dangerouslySetInnerHTML={{
//                                             __html: poem.frontmatter.description || poem.excerpt,
//                                         }}
//                                         itemProp="description"
//                                     />
//                                 </section>
//                             </article>
//                         </li>
//                     )
//                 })}
//             </ol>
//         </Layout>
//     )
// }

// export default Poetry

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Poetry" />

// export const pageQuery = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//         filter: {fileAbsolutePath: {glob: "**/content/poetry/**/*.md"}}
//         sort: { frontmatter: { date: DESC } }
//     ) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
