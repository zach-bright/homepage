import React from "react"
import SmallHeaderRightText from 'components/molecules/SmallHeaderRightText.jsx'
import BulletPointList from 'components/molecules/BulletPointList.jsx'
import Text from 'components/atoms/Text.jsx'

export default ({ header, subHeader, rightText, bulletPoints }) => {
  return (
    <div className="headed-bullet-point-list-container">
      <SmallHeaderRightText header={header} rightText={rightText} />
      {subHeader && <Text content={subHeader} />}
      <BulletPointList bulletPoints={bulletPoints} />
    </div>
  )
}
