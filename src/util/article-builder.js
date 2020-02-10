import React from 'react'
import BigHeader from 'components/atoms/BigHeader.jsx'
import ArticleFooter from 'components/organisms/ArticleFooter.jsx'
import BasicSection from 'components/organisms/BasicSection.jsx'
import BulletPointSection from 'components/organisms/BulletPointSection.jsx'

let articleBuilder = {
  build: (article) => {
    // todo: parse metadata
    let width = article.metadata.width || 'auto'
    let header = articleBuilder.buildTitle(article.title)
    let sections = articleBuilder.buildSections(article.sections)
    let footer = articleBuilder.buildFooter(article.footer)
    return (
      <div className="article-container" style={{margin: '0 auto', width: width}}>
        {header}
        {sections}
        {footer}
      </div>
    )
  },
  buildTitle: (header) => {
    if (!header) return null
    return <BigHeader content={header} />
  },
  buildSections: (sections) => {
    // Interpret each section's correct type
    let sectionComponents = []
    for (let section of sections) {
      if (section.headedBulletPointLists) {
        sectionComponents.push(<BulletPointSection {...section} />)
      } else {
        sectionComponents.push(<BasicSection {...section} />)
      }
    }
    return sectionComponents
  },
  buildFooter: (footer) => {
    if (!footer) return null
    return <ArticleFooter author={footer.author} />
  }
}

export default articleBuilder
