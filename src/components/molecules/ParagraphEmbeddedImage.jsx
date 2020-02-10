import React from "react"
import Image from 'components/atoms/Image.jsx'
import Paragraph from 'components/atoms/Paragraph.jsx'

export default ({ image, content }) => {
  return (
    <div className="paragraph-embedded-image-container">
      <Image {...image} />
      <Paragraph content={content} />
    </div>
  )
}
