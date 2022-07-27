import React from 'react'
import { graphql } from "gatsby"
import Tast from "../components/Layout"

export default function About({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <Tast>
      <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <img alt="logo" src={data.image.publicURL} />
    </div>
    </Tast>

  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "logo.jpg" }) {
      publicURL
    }
  }
`


