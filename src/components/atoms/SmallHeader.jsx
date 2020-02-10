import React from "react"
import Text from './Text.jsx'

export default ({ content }) => {
  return (
    <b className='small-header-container'>
      <Text content={content} />
    </b>
  )
}