import React from "react"
import Text from 'components/atoms/Text.jsx'

export default ({ content }) => {
  return (
    <h2 className="medium-header-container">
      <Text content={content} />
    </h2>
  )
}
