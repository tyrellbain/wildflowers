import React from 'react';
import Layout from '../../components/Layout/Layout';
import Slider from '../../components/Slider/Slider';
import SEO from '../../components/SEO/SEO';
import Img from "gatsby-image";

import { graphql } from "gatsby";

import './Home.css';

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
  }`;

const Home = ({ data }) => {
  const {title, content, meta} = data.pagesJson
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
    </Layout>
  )
}

export default Home
