import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeContent from "../components/welcomeContent"
import Jumbotron from '../components/homeJumbotron'
import Greenbar from '../components/greenBar'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Greenbar />
    <Jumbotron />
    <WelcomeContent />
  </Layout>
)

export default IndexPage
