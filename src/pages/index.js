import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeContent from "../components/welcomeContent"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeContent />
  </Layout>
)

export default IndexPage
