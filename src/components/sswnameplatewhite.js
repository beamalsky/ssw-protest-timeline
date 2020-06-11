import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const SSWNameplateWhite = ({props}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ssw-nameplate-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <a href="https://southsideweekly.com/">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{
          margin: '0 auto',
          width: '18vw',
          marginBottom: '0.5rem'
        }}
      />
    </a>
  )
}

export default SSWNameplateWhite
