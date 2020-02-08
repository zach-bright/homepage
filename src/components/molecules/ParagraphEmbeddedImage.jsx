import React from "react"
import Image from '../atoms/Image.jsx'
import Paragraph from '../atoms/Paragraph.jsx'

export default ({ image, paragraph }) => {
  return (
    <div>
      <Image content={image} />
      <Paragraph content={paragraph} />
    </div>
  )
}