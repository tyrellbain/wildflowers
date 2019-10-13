import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import './MobileNavigation.css';


const MobileNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
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
    }
  `);

  const {items, logo} = data.allNavigationJson.edges[0].node;

  return (
    <div className="Navigation__root">
      <div className="Navigation__container">
        <div className="Navigation__logo-container">
            <img
              className="Navigation__logo"
              src={logo.imgSrc.childImageSharp.sizes.originalImg}
              alt={logo.imgAlt}
            />
        </div>
      <nav className="Navigation__links-container">
        <ul className="Navigation__links">
          {items.map(navItem =>(
              <li className="Navigation__link" key={`nav${navItem.name}`}>
                <Link
                  className="Navigation__link-anchor"
                  activeClassName="Navigation__active"
                  partiallyActive={true}
                  to={navItem.slug}>
                  {navItem.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  </div>
  );
}


export default MobileNavigation;