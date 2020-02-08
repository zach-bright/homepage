import React from "react"
import Text from '../atoms/Text.jsx'

export default ({ author }) => {
  return (
    <div className="article-footer-container">
      <Text content={"Author: " + author} />
    </div>
  )
}
