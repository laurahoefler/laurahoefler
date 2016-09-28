import React, { PropTypes } from "react"
import { Link } from "phenomic/lib/Link"

import styles from "./index.css"

const PageError = ({ error, errorText }) => (
  <div className={ styles.container }>
    <div className={ styles.oops }>{ "Hoppla!" }</div>
    <div className={ styles.text }>
      <p className={ styles.title }>
        <strong>{ error }</strong>
        { " " }
        { errorText }
      </p>
      {
        error === 404 &&
        <div>
          { "Hier gibt es leider nichts zu sehen." }
          <br />
          <Link to="/">
            { "Zur Startseite." }
          </Link>
        </div>
      }
    </div>
  </div>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Seite nicht gefunden",
}

export default PageError
