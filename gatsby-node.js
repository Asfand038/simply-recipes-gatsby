const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allContentfulRecipe: { nodes: recipes },
    },
  } = await graphql(`
    {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  recipes.forEach(({ content: { tags } }) => {
    tags.forEach(tag => {
      const slug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${slug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: { tag },
      })
    })
  })
}
