import React from "react"
import Article from '../templates/Article.jsx'

export default ({  }) => {
  return (
    <div>
      <Article
        mainHeaderContent='Hello world!'
        sections={[
          {
            headerContent: 'Subheader',
            paragraphs: [
              { content: 'Text' }
            ]
          }
        ]}
      />
    </div>
  )
}