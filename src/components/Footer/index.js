import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from "phenomic/lib/Link"

import styles from "./index.css"

const Footer = (props, { collection }) => {
  const pages = enhanceCollection(collection, {
    filter: filter => typeof filter.footernav === "number",
    sort: "footernav",
  })

  return (
    <footer className={ styles.footer }>
      { " Copyright © " }
      { new Date().getFullYear() }
      { " Laura Höfler " }
      { pages.map((page, i) => [
        " • ",
        <Link
          key={ `page-${ i }-${ page.__url }` }
          to={ page.__url }
        >
          { page.title }
        </Link>,
      ]) }
    </footer>
  )
}

Footer.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Footer
