import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import './DesktopNavigation.css';


const DesktopNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      allNavigationJson {
        edges {
          node {
            items {
              name
              slug
              children {
                name
                slug
              }
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
              <li className={navItem.children !== null ? "Navigation__link Navigation__hasSubNavigation" : "Navigation__link"} key={`nav${navItem.name}`}>
                <Link
                  className="Navigation__link-anchor"
                  activeClassName="Navigation__active"
                  partiallyActive={true}
                  to={navItem.slug}>
                  {navItem.name}
                </Link>
                {navItem.children !== null ? 
                  <ul className="Subnavigation__root">
                    {navItem.children.map(child => (
                      <li className="Subavigation__link">
                        <Link 
                          className="Subnavigation__link-anchor" 
                          activeClassName="Subnavigation__active" 
                          partiallyActive={true}
                          to={navItem.slug + child.slug}>
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul> : null} 
              </li>
            ))}
        </ul>
      </nav>
    </div>
  </div>
  );
}


export default DesktopNavigation;