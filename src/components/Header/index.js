import React, { PropTypes } from "react"
import Headroom from "react-headroom"
import { Link } from "phenomic/lib/Link"

import styles from "./index.css"

const Header = () => (
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
          <Link
            className={ styles.link }
            activeClassName={ styles.linkActive }
            to="/ueber-mich/"
          >
            { "Über mich" }
          </Link>
          <Link
            className={ styles.link }
            activeClassName={ styles.linkActive }
            to="/referenzen/"
          >
            { "Referenzen" }
          </Link>
          <Link
            className={ styles.link }
            activeClassName={ styles.linkActive }
            to="/kontakt/"
          >
            { "Kontakt" }
          </Link>
        </div>
      </nav>
    </header>
  </Headroom>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
