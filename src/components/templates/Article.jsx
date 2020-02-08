import React from "react"
import Section from '../organisms/Section.jsx'
import BigHeader from '../atoms/BigHeader.jsx'
import ArticleFooter from '../organisms/ArticleFooter.jsx'

export default ({ headerContent, footerContent, sections }) => {
  return (
    <div className="article-container">
      <BigHeader content={headerContent} />
      {
        sections.map(section => <Section {...section} />)
      }
      <ArticleFooter {...footerContent} />
    </div>
  )
}
