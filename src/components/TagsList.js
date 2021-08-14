import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"

import { setupTags } from "../utils/setupTags"

const TagsList = ({ recipes }) => {
  const tags = setupTags(recipes)

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map(([tagName, totalTimesUsed]) => {
          const slug = slugify(tagName, { lower: true })
          return (
            <Link key={tagName} to={`/tags/${slug}`}>
              {tagName} ({totalTimesUsed})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
