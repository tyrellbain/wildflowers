import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import './Navigation.css';

export const data = graphql`
  query SiteLinkQuery {
    allNavigationJson {
      edges {
        node {
          items {
            name
            slug
          }
          logo {
            imgAlt
            imgSrc {
              childImageSharp {
                sizes {
                  originalImg
                }
              }
            }
          }
        }
      }
    }
  }`;


class Navigation extends React.PureComponent {

render() {
  console.log(this.props);
  return <div />;

}
}


export default Navigation;
