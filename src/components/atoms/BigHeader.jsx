import React from "react"
import Text from './Text.jsx'

export default ({ content }) => {
  return (
    <center>
      <h1>
        <Text content={content} />
      </h1>
    </center>
  )
}
