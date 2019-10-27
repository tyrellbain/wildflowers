import React from "react"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/SEO/SEO"
import GalleryTile from "../../components/GalleryTile/GalleryTile"
import GalleryLightbox from "../../components/GalleryLightbox/GalleryLightbox"
import Grid from "../../components/Grid/Grid"

import { graphql } from "gatsby"

import "./SingleGallery.css"

export const query = graphql`
  query($slug: String!) {
    allGalleryJson(filter: { tags: { eq: $slug } }) {
      edges {
        node {
          imgSrc {
            childImageSharp {
              fixed(width: 550, height: 550, quality: 80, cropFocus: CENTER) {
                src
              }
              fluid(maxWidth: 1200, quality: 80) {
                src
              }
            }
          }
          imgAlt
        }
      }
    }
  }
`

// used to render out and individual gallery based on tags slug
class SingleGallery extends React.PureComponent {
  constructor(props) {
    super(props)
    this.imgCount = this.props.data.allGalleryJson.edges.length
    this.state = {
      activeIndex: 0,
      activeImg: {
        src: "",
        alt: "",
      },
      lightboxIsOpen: false,
    }
  }

  _thumbnailClick(event, index, src, alt) {
    event.preventDefault()
    this.setState({
      lightboxIsOpen: true,
      activeIndex: 10,
      activeImg: {
        src: src,
        alt: alt,
      },
    })
  }

  _closeLightbox = () => {
    this.setState({ lightboxIsOpen: false })
  }

  _goToSlide = dir => {
    const { allGalleryJson } = this.props.data
    if (dir === 1) {
      this.setState(state => {
        const image =
          allGalleryJson.edges[state.activeIndex + 1] !== null
            ? allGalleryJson.edges[state.activeIndex]
            : null
        return {
          activeIndex:
            state.activeIndex === this.imgCount - 1 ? 0 : state.activeIndex + 1,
          activeImg: {
            src: image.node.imgSrc.childImageSharp.fluid.src,
            alt: image.node.imgAlt,
          },
        }
      })
    } else if (dir === -1) {
      this.setState(state => {
        const image =
          allGalleryJson.edges[state.activeIndex - 1] !== null
            ? allGalleryJson.edges[state.activeIndex]
            : null
        return {
          activeIndex:
            state.activeIndex === 0 ? this.imgCount - 1 : state.activeIndex - 1,
          activeImg: {
            src: image.node.imgSrc.childImageSharp.fluid.src,
            alt: image.node.imgAlt,
          },
        }
      })
    }
  }

  render() {
    const { name, asideCopy } = this.props.pageContext
    const { allGalleryJson } = this.props.data
    return (
      <>
        <Layout bodyLock={this.state.lightboxIsOpen}>
          <SEO title={name} />
          <div className="SingleGallery__content">
            <h1 className="SingleGallery__title">{name}</h1>
            {asideCopy !== null ? (
              <p className="SingleGallery__location">{asideCopy.location}</p>
            ) : null}
            {asideCopy !== null ? (
              <p className="SingleGallery__date">{asideCopy.date}</p>
            ) : null}
          </div>
          <Grid mobileColumns={2} tabletColumns={3} desktopColumns={4}>
            {allGalleryJson.edges.map((image, i) => {
              const { fixed, fluid } = image.node.imgSrc.childImageSharp
              const { imgAlt } = image.node
              return (
                <a
                  href="#"
                  key={name}
                  onClick={e => this._thumbnailClick(e, i, fluid.src, imgAlt)}
                >
                  <GalleryTile imgAlt={imgAlt} imgSrc={fixed.src} />
                </a>
              )
            })}
          </Grid>
          {asideCopy !== null ? (
            <div className="SingleGallery__photogInfo">
              <span>Photographed by </span>
              <a
                className="SingleGallery__photogLink"
                href={asideCopy.photogLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {asideCopy.photog}
              </a>
            </div>
          ) : null}
        </Layout>
        <GalleryLightbox
          goToSlide={this._goToSlide}
          imgCount={this.imgCount}
          isOpen={this.state.lightboxIsOpen}
          closeLightbox={this._closeLightbox}
          activeImg={this.state.activeImg}
          activeIndex={this.state.activeIndex}
        />
      </>
    )
  }
}

export default SingleGallery
