import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{padding: '4rem'}}>NOT FOUND</h1>
    <p>You just hit a page that doesn&#39;t exist!</p>
  </Layout>
)

export default NotFoundPage
