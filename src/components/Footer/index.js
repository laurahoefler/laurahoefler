import React from "react"
import { Link } from "phenomic/lib/Link"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { "Copyright © " }
    { new Date().getFullYear() }
    { " Laura Höfler " }
    { " • " }
    <Link
      className={ styles.link }
      to="/impressum/"
    >
      { "Impressum" }
    </Link>
  </footer>
)

export default Footer
