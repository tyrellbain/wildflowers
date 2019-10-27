import React from "react"
import GalleryTile from "./GalleryTile"
import Grid from "../Grid/Grid"

import { graphql, useStaticQuery, Link } from "gatsby"

// used to render out a container for the gallery page tiles
const GalleryTileContainer = () => {
  const data = useStaticQuery(graphql`
    query GalleryTileContainerQuery {
      allTagsJson {
        edges {
          node {
            name
            slug
            cover {
              childImageSharp {
                fixed(width: 600, height: 600, quality: 90, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid mobileColumns={2} tabletColumns={2} desktopColumns={3}>
      {data.allTagsJson.edges.map(tag => (
        <Link
          key={tag.node.slug}
          className="GalleryTile__link"
          to={`/gallery/${tag.node.slug}`}
        >
          <GalleryTile
            slug={tag.node.slug}
            title={tag.node.name}
            imgAlt={`${tag.node.name} Gallery`}
            imgSrc={tag.node.cover.childImageSharp.fixed.src}
            hasOverlay={true}
          />
        </Link>
      ))}
    </Grid>
  )
}

export default GalleryTileContainer
