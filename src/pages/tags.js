import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import { setupTags } from "../utils/setupTags"

const Tags = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const tags = setupTags(recipes)

  return (
    <Layout>
      <Seo title="Tags" />
      <main className="page">
        <section className="tags-page">
          {tags.map(([tagName, totalTimesUsed]) => (
            <Link key={tagName} to={`/${tagName}`} className="tag">
              <h5>{tagName}</h5>
              <p>{totalTimesUsed} recipe</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default Tags
