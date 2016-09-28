import React from "react"
import Helmet from "react-helmet"

import styles from "./index.css"

const PageLoading = () => (
  <div>
    <Helmet
      title={ "Seite wird geladen..." }
    />
    <div className={ styles.loader }>
      <div className={ styles.spinner }></div>
    </div>
  </div>
)

export default PageLoading
