import React from "react"
import HeadedBulletPointList from './HeadedBulletPointList.jsx'
import MediumHeader from '../atoms/MediumHeader.jsx'

export default ({ headerContent, headedBulletPointLists }) => {
  return (
    <div className="bullet-point-section-container">
      <MediumHeader content={headerContent} />
      {
        headedBulletPointLists.map((section) => {
          return <HeadedBulletPointList {...section} />
        })
      }
    </div>
  )
}
