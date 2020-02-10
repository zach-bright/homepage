import React from "react"
import Article from '../templates/Article.jsx'
import resumeJson from '../../../assets/resume.json'

export default () => {
  return (
    <div>
      <Article {...resumeJson} />
    </div>
  )
}
