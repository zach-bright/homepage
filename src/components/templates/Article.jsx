import React from "react"
import Section from '../organisms/Section.jsx'
import BigHeader from '../atoms/BigHeader.jsx'

export default ({ mainHeaderContent, sections }) => {
  return (
    <div>
      <BigHeader content={mainHeaderContent} />
      {
        sections.map(section => <Section {...section} />)
      }
    </div>
  )
}