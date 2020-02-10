import React from "react"
import Text from '../atoms/Text.jsx'
import SmallHeader from '../atoms/SmallHeader.jsx'

export default ({ header, rightText }) => {
  return (
    <div className="small-header-right-text-container">
      <SmallHeader content={header} />
      <div className="right-text-container">
        <Text content={rightText} />
      </div>
      <div className="clearfix" />
    </div>
  )
}
