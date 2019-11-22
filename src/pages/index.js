import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeContent from "../components/WelcomeContent/welcomeContent"
import Jumbotron from '../components/Header/homeJumbotron'
import Greenbar from '../components/greenBar'
import WelcomeCards from '../components/WelcomeContent/welcomeCards'
import RequestQuote from '../components/RequestQuote/requestQuote'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Greenbar />
    <Jumbotron />
    <WelcomeContent />
    <WelcomeCards />
    <RequestQuote />
  </Layout>
)

export default IndexPage
