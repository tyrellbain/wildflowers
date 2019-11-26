import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import Grid from "../../components/Grid/Grid"
import Img from "gatsby-image"
import axios from "axios"

import { graphql } from "gatsby"
import "./Contact.css"

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
  }
`

const API_PATH = "www.wildflowers.ca/email.php"

// used to render out the gallery page
class Contact extends React.PureComponent {
  state = {
    name: "",
    email: "",
    occasion: "",
    phoneNumber: "",
    message: "",
    res: {
      sent: false,
      status: "",
      message: "",
    },
  }

  _handleFormSubmit = e => {
    e.preventDefault()
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: this.state,
    })
      .then(result => {
        this.setState({
          res: {
            sent: true,
            status: result.data.status,
            message: result.data.message,
          },
        })
      })
      .catch(error => {
        this.setState({
          res: {
            sent: true,
            status: "error",
            message: error,
          },
        })
      })
  }

  render() {
    const { heading, content, featureImg, meta } = this.props.data.pagesJson
    return (
      <Layout>
        <SEO title={meta.title} description={meta.description} />
        <Grid mobileComlumns={1} tabletColumns={1} desktopColumns={2}>
          <Img
            className="Contact__image"
            fluid={featureImg.src.childImageSharp.fluid}
            alt={featureImg.alt}
          />
          <div className="Contact__right">
            <h1>{heading}</h1>
            <div
              className="Contact__content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {this.state.res.sent ? (
              <h2
                className={
                  this.state.res.status === "success"
                    ? "Contact__form__success-heading"
                    : "Contact__form__fail-heading"
                }
              >
                {this.state.res.message}
              </h2>
            ) : (
              <form className="Contact__form" id="contact_form">
                <div className="Contact__formgroup">
                  <label className="Contact__label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="Contact__input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    required
                  />
                </div>
                <div className="Contact__formgroup">
                  <label className="Contact__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="Contact__input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    required
                  />
                </div>
                <div className="Contact__formgroup">
                  <label className="Contact__label" htmlFor="occasion">
                    Occasion
                  </label>
                  <input
                    className="Contact__input"
                    type="text"
                    id="occasion"
                    name="occasion"
                    placeholder="Occasion"
                    value={this.state.occasion}
                    onChange={e => this.setState({ occasion: e.target.value })}
                  />
                </div>
                <div className="Contact__formgroup">
                  <label className="Contact__label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="Contact__input"
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={this.state.phoneNumber}
                    onChange={e =>
                      this.setState({ phoneNumber: e.target.value })
                    }
                  />
                </div>
                <div className="Contact__formgroup">
                  <label className="Contact__label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="Contact__textarea"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  className="Contact__submit"
                  type="submit"
                  onClick={e => this._handleFormSubmit(e)}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </Grid>
      </Layout>
    )
  }
}

export default Contact
