import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { title: siteTitle, description: siteDescription },
    },
  } = useStaticQuery(query)

  const metaDescription = description || siteDescription

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}
      meta={[{ name: `description`, content: metaDescription }]}
    />
  )
}

export default SEO
