import React from "react"
import Grid from "../Grid/Grid"
import { useStaticQuery, graphql } from "gatsby"

import "./InstagramFeed.css"

const InstagramFeed = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allInstaNode(sort: { order: DESC, fields: timestamp }) {
          edges {
            node {
              id
              localFile {
                childImageSharp {
                  fixed(width: 300, height: 300, quality: 90) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(posts.allInstaNode.edges)
  return (
    <React.Fragment>
      <h3 className="InstagramFeed__heading">Instagram</h3>
      <Grid mobileColumns={3} tabletColumns={4} desktopColumns={6}>
        {posts.allInstaNode.edges.map(post => (
          <a
            href={`https://www.instagram.com/p/${post.node.id}/`}
            target="_blank"
          >
            <img src={post.node.localFile.childImageSharp.fixed.src} />
          </a>
        ))}
      </Grid>
    </React.Fragment>
  )
}

export default InstagramFeed
