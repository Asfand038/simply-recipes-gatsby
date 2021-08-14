import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const TagTemplate = props => {
  const {
    data: {
      allContentfulRecipe: { nodes: recipes },
    },
    pageContext: { tag },
  } = props

  const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

  return (
    <Layout>
      <Seo title={capitalize(tag)} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query FetchRecipesByTag($tag: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        prepTime
        cookTime
        title
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
