// import * as React from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const PoemTemplate = ({
//   data: { previous, next, site, markdownRemark: poem },
//   location,
// }) => {
//   const siteTitle = site.siteMetadata?.title || `Title`

//   return (
//     <Layout location={location} title={siteTitle}>
//       <article
//         className="blog-post"
//         itemScope
//         itemType="http://schema.org/Article"
//       >
//         <header>
//           <h2 itemProp="headline">{poem.frontmatter.title}</h2>
//           <p>{poem.frontmatter.date}</p>
//         </header>
//         <section
//           dangerouslySetInnerHTML={{ __html: poem.html }}
//           itemProp="articleBody"
//         />
//         <br/><br/><br/><br/>
//         <hr />
//         <footer>
//         </footer>
//       </article>
//       <nav className="blog-post-nav">
//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={`/poetry${previous.fields.slug}`} rel="prev">
//                 ← {previous.frontmatter.title}
//               </Link>
//             )}
//           </li>
//           <li>
//             {next && (
//               <Link to={`/poetry${next.fields.slug}`} rel="next">
//                 {next.frontmatter.title} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </Layout>
//   )
// }

// export const Head = ({ data: { markdownRemark: poem } }) => {
//   return (
//     <Seo
//       title={poem.frontmatter.title}
//       description={poem.frontmatter.description || poem.excerpt}
//     />
//   )
// }

// export default PoemTemplate

// export const pageQuery = graphql`
//   query PoetryPostBySlug(
//     $id: String!
//     $previousPoemId: String
//     $nextPoemId: String
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPoemId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPoemId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// `
