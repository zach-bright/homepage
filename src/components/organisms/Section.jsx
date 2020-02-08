import React from "react"
import ParagraphEmbeddedImage from '../molecules/ParagraphEmbeddedImage.jsx'
import Paragraph from '../atoms/Paragraph.jsx'
import MediumHeader from '../atoms/MediumHeader.jsx'

export default ({ headerContent, paragraphs }) => {
  let paragraphComponents = paragraphs.map((paragraph) => {
    if (paragraph.image) {
      return <ParagraphEmbeddedImage {...paragraph} />
    } else {
      return <Paragraph {...paragraph} />
    }
  })
  return (
    <div>
      <MediumHeader content={headerContent} />
      {paragraphComponents}
    </div>
  )
}