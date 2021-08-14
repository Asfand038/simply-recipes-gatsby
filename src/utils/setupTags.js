export const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(({ content: { tags } }) => {
    tags.forEach(tag => {
      if (tag in allTags) {
        allTags[tag]++
      } else {
        allTags[tag] = 1
      }
    })
  })

  const sortedTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secongTag] = b

    return firstTag.localeCompare(secongTag)
  })

  return sortedTags
}
