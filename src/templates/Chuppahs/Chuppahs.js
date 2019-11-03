import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Grid from "../../components/Grid/Grid"
import Img from "gatsby-image"

import { Link, graphql } from "gatsby"
import "./Chuppahs.css"

export const query = graphql`
  query($slug: String!) {
    pagesJson(slug: { eq: $slug }) {
      heading
      content
      featureImg {
        alt
        src {
          childImageSharp {
            fixed(width: 1000, quality: 100) {
              src
            }
          }
        }
      }
      meta {
        description
        title
      }
    }
  }
`

const Chuppahs = ({ data }) => {
  const { heading, content, featureImg, meta } = data.pagesJson
  return (
    <Layout>
      <SEO title={meta.title} description={meta.description} />
      <Grid mobileComlumns={1} tabletColumns={1} desktopColumns={2}>
        <Img
          className="Chuppahs__image"
          fixed={featureImg.src.childImageSharp.fixed}
          alt={featureImg.alt}
        />
        <div className="Chuppahs__right">
          <h2>{heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div>
            <p>
              <Link class="Chuppahs__contact" to="/contact">
                Contact us
              </Link>
              &nbsp;for a quote.
            </p>
            <p>Mazel Tov!</p>
          </div>
        </div>
      </Grid>
    </Layout>
  )
}

export default Chuppahs
