import React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO/SEO';
import Grid from '../../components/Grid/Grid';
import Img from "gatsby-image";

import { graphql } from "gatsby";
import './About.css';

export const query = graphql`
  query($slug: String!) {
    pagesJson(slug: { eq: $slug }) {
      heading
      content
      featureImg {
        alt
        src {
        childImageSharp {
          fluid(maxWidth: 1000, cropFocus: CENTER) {
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
  }`;

const About = ({ data }) => {
  const {heading, content, featureImg, meta} = data.pagesJson
  return (
    <Layout>
      <SEO title={meta.title} description={meta.description} />
        <Grid columns={2}>
            <Img
              className="About__featureImg"
              fluid={featureImg.src.childImageSharp.fluid}
              alt={featureImg.alt}
            />
          <>
            <h1>{heading}</h1>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </>
        </Grid>
    </Layout>
  )
}

export default About
