import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            layout="fullWidth"
            placeholder="tracedSVG"
            className="hero-img"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Home
