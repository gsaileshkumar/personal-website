/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Sailesh Kumar`}
      meta={[
        {
          name: `description`,
          content:
            "Hey there, I'm Sailesh Kumar. Contact me on LinkedIn https://www.linkedin.com/in/gsaileshkumar",
        },
        {
          property: `og:title`,
          content: "Sailesh Kumar",
        },
        {
          property: `og:description`,
          content:
            "Hey there, I'm Sailesh Kumar. Contact me on LinkedIn https://www.linkedin.com/in/gsaileshkumar",
        },
        {
          property: `og:type`,
          content: "website",
        },
        {
          property: `og:site_name`,
          content: "Sailesh Kumar",
        },
        {
          property: `og:url`,
          content: "https://www.saileshkumar.com",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
