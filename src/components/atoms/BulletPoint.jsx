import React from "react"
import Text from 'components/atoms/Text.jsx'

export default ({ content }) => {
  return (
    <li><Text content={content} /></li>
  )
}