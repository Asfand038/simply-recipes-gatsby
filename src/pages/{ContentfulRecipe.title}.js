import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import slugify from "slugify"

import Layout from "../components/Layout"
import Seo from "../components/SEO"

const RecipeTemplate = ({ data: { contentfulRecipe: recipe } }) => {
  const {
    title,
    servings,
    prepTime,
    cookTime,
    description: { description },
    image,
    content: { tags, instructions, ingredients, tools },
  } = recipe

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>serving</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:
                {tags.map(tag => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link to={`/tags/${slug}`} key={tag}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h5>instructions</h5>
              {instructions.map((instruction, index) => (
                <div className="single-instruction" key={index}>
                  <header>
                    <p>step {index + 1} </p>
                    <div />
                  </header>
                  <p>{instruction}</p>
                </div>
              ))}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((ingredient, index) => (
                  <p key={index} className="single-ingredient">
                    {ingredient}
                  </p>
                ))}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((tool, index) => (
                  <p key={index} className="single-tool">
                    {tool}
                  </p>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query FetchRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      servings
      prepTime
      cookTime
      content {
        tags
        instructions
        ingredients
        tools
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
