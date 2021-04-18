import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Raj Shree Shringar',
  description: 'We sell the best jewelleries for cheap',
  keywords: 'jewellery, buy jewellery, cheap jewellery',
}

export default Meta
