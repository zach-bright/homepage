import React from "react"
import BulletPoint from '../atoms/BulletPoint.jsx'

export default ({ bulletPoints }) => {
  return (
    <ul className='bullet-point-list-container' >
      {bulletPoints.map(bulletPoint => <BulletPoint content={bulletPoint} />)}
    </ul>
  )
}
