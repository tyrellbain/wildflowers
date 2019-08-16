import React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO/SEO';
import Grid from '../../components/Grid/Grid';
import Img from "gatsby-image";
import axios from 'axios';

import { graphql } from "gatsby";
import './Contact.css';

export const query = graphql`
  query($slug: String!) {
    pagesJson(slug: { eq: $slug }) {
      heading
      content
      featureImg {
        alt
        src {
        childImageSharp {
          fluid(maxWidth: 1000) {
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

const API_PATH = 'http://localhost:8888/email.php';

// used to render out the gallery page
class Contact extends React.PureComponent {
  state = {
    name: "",
    email: "",
    occasion: "",
    phoneNumber: "",
    message: "",
  };

  _handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: this.state
  })
    .then(result => {
      console.log(result);
    })
    .catch(error => {console.log(error)});
  };

  render() {
    const {heading, content, featureImg, meta} = this.props.data.pagesJson;
    return (
      <Layout>
        <SEO title={meta.title} description={meta.description} />
        <Grid columns={2}>
            <Img
              className="Contact__image"
              fluid={featureImg.src.childImageSharp.fluid}
              alt={featureImg.alt}
            />
          <div>
            <h1>{heading}</h1>
            <div dangerouslySetInnerHTML={{__html: content}} />
            <form>
              <div className="Contact__formgroup">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                  required
                />
              </div>
              <div className="Contact__formgroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  required
                />
              </div>
              <div className="Contact__formgroup">
                <label htmlFor="occasion">Occasion</label>
                <input
                  type="text"
                  name="occasion"
                  placeholder="Occasion"
                  value={this.state.occasion}
                  onChange={e => this.setState({ occasion: e.target.value })}
                />
              </div>
              <div className="Contact__formgroup">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={this.state.phoneNumber}
                  onChange={e => this.setState({ phoneNumber: e.target.value })}
                />
              </div>
              <div className="Contact__formgroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                  >
              </textarea>
              </div>
              <input type="submit" onClick={e => this._handleFormSubmit(e)} value="Submit" />
            </form>
          </div>
        </Grid>
      </Layout>
    );
  }
}

export default Contact
