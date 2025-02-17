import React, { useState } from "react"
import Menu from "../../svgs/Menu/Menu"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import classnames from "classnames"

import "./MobileNavigation.css"

const MobileNavigation = ({ onOpen }) => {
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
  const [isOpen, setIsOpen] = useState(false)
  const [openSubNav, setOpenSubNav] = useState(false)
  return (
    <React.Fragment>
      <div className="Navigation__root">
        <div className="Navigation__container">
          <Link className="Navigation__logo-container" to="/">
            <img
              className="Navigation__logo"
              src={logo.imgSrc.childImageSharp.sizes.originalImg}
              alt={logo.imgAlt}
            />
          </Link>
          <div className="Navigation__menu">
            <button
              className="Navigation__menu-button"
              onClick={() => {
                onOpen(!isOpen)
                setIsOpen(!isOpen)
              }}
            >
              <Menu isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>
      {isOpen ? (
        <nav className="Navigation__mobile-menu">
          <ul className="Navigation__links">
            {items.map(navItem => (
              <li
                className={classnames({
                  Navigation__link: true,
                  Navigation__hasSubNavigation: navItem.children !== null,
                  Navigation__subNavOpen: openSubNav === navItem.slug,
                })}
                onClick={() => {
                  setOpenSubNav(() => {
                    if (openSubNav === navItem.slug) {
                      return null
                    }
                    return navItem.slug
                  })
                }}
                key={`nav${navItem.name}`}
              >
                <Link
                  className="Navigation__link-anchor"
                  activeClassName="Navigation__active"
                  partiallyActive={true}
                  to={`/${navItem.slug}`}
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
                      <li
                        className="Subnavigation__link"
                        key={`subnavigation-${child.slug}`}
                      >
                        <Link
                          className="Subnavigation__link-anchor"
                          activeClassName="Subnavigation__active"
                          partiallyActive={false}
                          to={`/${navItem.slug}/${child.slug}`}
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
      ) : null}
    </React.Fragment>
  )
}

MobileNavigation.propTypes = {
  onOpen: PropTypes.func.isRequired,
}

export default MobileNavigation
