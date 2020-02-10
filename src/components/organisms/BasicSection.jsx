import React from "react"
import ParagraphEmbeddedImage from 'components/molecules/ParagraphEmbeddedImage.jsx'
import Paragraph from 'components/atoms/Paragraph.jsx'
import MediumHeader from 'components/atoms/MediumHeader.jsx'

export default ({ headerContent, paragraphs }) => {
  let paragraphComponents = paragraphs.map((paragraph) => {
    if (paragraph.image) {
      return <ParagraphEmbeddedImage {...paragraph} />
    } else {
      return <Paragraph {...paragraph} />
    }
  })
  return (
    <div className="section-container">
      <MediumHeader content={headerContent} />
      {paragraphComponents}
    </div>
  )
}
