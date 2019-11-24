import React from "react"
import Layout from "../../components/Layout/Layout"
import Slider from "../../components/Slider/Slider"
import Grid from "../../components/Grid/Grid"
import InstagramFeed from "../../components/InstagramFeed/InstagramFeed"
import SEO from "../../components/SEO/SEO"
import Img from "gatsby-image"

import { graphql } from "gatsby"

import "./Home.css"

export const query = graphql`
  query($slug: String!) {
    pagesJson(slug: { eq: $slug }) {
      title
      content
      meta {
        description
        title
      }
    }
    allHeroJson {
      nodes {
        src {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1000, quality: 100) {
              src
            }
          }
        }
        alt
      }
    }
  }
`

const Home = ({ data }) => {
  const { title, content, meta } = data.pagesJson
  return (
    <Layout>
      <SEO title={meta.title} description={meta.description} />
      <Slider>
        {data.allHeroJson.nodes.map((img, i) => (
          <Img
            key={i}
            className="Home__heroImage"
            fluid={img.src.childImageSharp.fluid}
            alt={img.alt}
          />
        ))}
      </Slider>
      <div className="Home__mission__root">
        <h3 className="Home__mission__heading">
          Wildflowers' Mission Statement
        </h3>
        <p className="Home__mission__paragraph">
          Welcome to Wildflowers! We're a full-service florist based in Toronto
          specializing in wedding flowers and chuppahs for over 20 years. Our
          mission is to help clients bring their floral vision to life by
          collaborating and sourcing the best flowers for everything from bridal
          bouquets, custom chuppahs or bespoke arrangements for any occasion. We
          aim to tailor our services to each client's needs and budget with our
          personalized approach to floral design.
        </p>
      </div>
      <div className="Home__love-letters__root">
        <h3 className="Home__love-letters__heading">
          Love Letters from Clients
        </h3>
        <Grid
          className="Home__love-letters__grid"
          mobileComlumns={1}
          tabletColumns={3}
          desktopColumns={3}
        >
          <div className="Home__love-letters">
            <p className="Home__love-letters__paragraph">
              Thanks so much for all of your hard work on the flower
              arrangements, you did a spectacular job and they were
              gorgeous...the boutonnières, the arch, and everything in between
              were all magnificent and exceeded my expectations. I thought the
              boutonnières were adorable! Bouquets were so pretty, loved the
              orchids, all so beautiful!
            </p>
            <p className="Home__love-letters__paragraph">
              I will be handing out your name wherever I go.
            </p>
            <p className="Home__love-letters__paragraph">All the best,</p>
            <small>- Carol</small>
          </div>
          <div className="Home__love-letters">
            <p className="Home__love-letters__paragraph">
              What can I say?!?  You guys came through for us again. You never
              disappoint.
            </p>
            <p className="Home__love-letters__paragraph">
              The two rooms were spectacular with the candles and flowers:  pure
              romance!!! Everyone was so impressed with your work and I wanted
              to thank you for listening to what we wanted and then delivering
              our vision.
            </p>
            <p className="Home__love-letters__paragraph">
              It was all exactly how I imagined it and I could not have been
              happier, but most important, I could not have done it without you.
              Thank you for everything.
            </p>
            <p className="Home__love-letters__paragraph">
              Joy and love to you both,
            </p>
            <small>- Sharon</small>
          </div>
          <div className="Home__love-letters">
            <p className="Home__love-letters__paragraph">
              There are not enough words to properly thank you for what you
              pulled off with our wedding, but I will do my best. Thank you for
              being so kind, generous, and patient with your time as we
              navigated the wedding planning process. You are unbelievably
              skilled and a dream to collaborate with! I have been FLOODED with
              compliments on all elements of the wedding decor since the moment
              the bouquets were delivered to the hotel! Every single detail of
              the flowers, vases, candles, and chuppah was simply perfect.
            </p>
            <p className="Home__love-letters__paragraph">All the best!</p>
            <small>- Erin</small>
          </div>
        </Grid>
      </div>
      <InstagramFeed />
    </Layout>
  )
}

export default Home
