import React from "react"
import SmallHeaderRightText from '../molecules/SmallHeaderRightText.jsx'
import BulletPointList from '../molecules/BulletPointList.jsx'
import Text from '../atoms/Text.jsx'

export default ({ header, subHeader, rightText, bulletPoints }) => {
  return (
    <div className="headed-bullet-point-list-container">
      <SmallHeaderRightText header={header} rightText={rightText} />
      {subHeader && <Text content={subHeader} />}
      <BulletPointList bulletPoints={bulletPoints} />
    </div>
  )
}
