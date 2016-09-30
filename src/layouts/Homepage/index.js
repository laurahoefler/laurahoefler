import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "phenomic/lib/Link"

import styles from "./index.css"
import Page from "../Page"

const Homepage = (props, { collection }) => {
  const pages = enhanceCollection(collection, {
    filter: {
      layout: "Page",
      nav: "main",
    },
    sort: "order",
  })

  return (
    <Page { ...props }>
      <div className={ styles.container }>
        <div className={ styles.plateOuter }>
          <div className={ styles.plateInner }>
            <nav className={ styles.soup }>
              <ul className={ styles.nav }>
                { pages.map((page, i) => (
                  <li
                    key={ `page-${ i }-${ page.__url }` }
                    className={ styles.navItem }
                  >
                    <Link
                      className={ styles.link }
                      to={ page.__url }
                    >
                      { page.title.split("").map((char, i) => (
                        <span key={ `char-${ i }-${ char }` }>
                          { char !== " " ? char : " " }
                        </span>
                      )) }
                    </Link>
                  </li>
                )) }
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Page>
  )
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
