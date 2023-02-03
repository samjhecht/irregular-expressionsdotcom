/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

// /**
//  * @type {import('gatsby').GatsbySSR['onRenderBody']}
//  */
// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }

import * as React from "react"

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Vulf_Sans-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="vulfSansRegular"
    />,
    <link
      rel="preload"
      href="/fonts/Vulf_Sans-Bold_Italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="vulfSansBoldItalic"
    />,
    <link
      rel="preload"
      href="/fonts/Vulf_Sans-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="vulfSansBold"
    />,
    <link
      rel="preload"
      href="/fonts/Vulf_Sans-Italic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="vulfSansItalic"
    />,
  ])
}