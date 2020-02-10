import React from "react"
import Text from './Text.jsx'

export default ({ content }) => {
  return (
    <h1 className='big-header-container'>
      <Text content={content} />
    </h1>
  )
}
