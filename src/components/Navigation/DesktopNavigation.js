import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

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
  `)

  const { items, logo } = data.allNavigationJson.edges[0].node

  return (
    <div className="Navigation__root">
      <div className="Navigation__container">
        <Link className="Navigation__logo-container" to={"/"}>
          <img
            className="Navigation__logo"
            src={logo.imgSrc.childImageSharp.sizes.originalImg}
            alt={logo.imgAlt}
          />
        </Link>
        <nav className="Navigation__links-container">
          <ul className="Navigation__links">
            {items.map(navItem => (
              <li
                className={
                  navItem.children !== null
                    ? "Navigation__link Navigation__hasSubNavigation"
                    : "Navigation__link"
                }
                key={`nav${navItem.name}`}
              >
                <Link
                  className="Navigation__link-anchor"
                  activeClassName="Navigation__active"
                  partiallyActive={true}
                  to={navItem.slug}
                  onClick={e => {
                    if (navItem.children !== null) {
                      e.preventDefault()
                    }
                  }}
                >
                  {navItem.name}
                </Link>
                {navItem.children !== null ? (
                  <ul className="Subnavigation__root">
                    {navItem.children.map(child => (
                      <li className="Subnavigation__link">
                        <Link
                          className="Subnavigation__link-anchor"
                          activeClassName="Subnavigation__active"
                          partiallyActive={false}
                          to={navItem.slug + "/" + child.slug}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default DesktopNavigation
