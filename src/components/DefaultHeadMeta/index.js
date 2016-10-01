import React, { PropTypes } from "react"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      htmlAttributes={ { "lang": "de" } }
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        {
          name: "google-site-verification",
          content: "OmqEYN_9n6Hzh_hTsjemUp9f0F-JrYCMXAVvRWkzw1Y",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
      ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
