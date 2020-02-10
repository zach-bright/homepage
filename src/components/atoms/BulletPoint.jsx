import React from "react"
import Text from './Text.jsx'

export default ({ content }) => {
  return (
    <li><Text content={content} /></li>
  )
}