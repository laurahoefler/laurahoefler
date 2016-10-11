import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import Headroom from "react-headroom"
import { Link } from "phenomic/lib/Link"

import styles from "./index.css"

const Header = (props, { collection }) => {
  const pages = enhanceCollection(collection, {
    filter: {
      layout: "Page",
      nav: "main",
    },
    sort: "order",
  })

  return (
    <Headroom>
      <header className={ styles.header }>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.logo }
              to="/"
            >
              { "Laura Höfler" }
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            { pages.map((page, i) => (
              <Link
                key={ `page-${ i }-${ page.__url }` }
                className={ styles.link }
                activeClassName={ styles.linkActive }
                to={ page.__url }
              >
                { page.title }
              </Link>
            )) }
          </div>
        </nav>
      </header>
    </Headroom>
  )
}

Header.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
}

export default Header
