import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, ImageContainer, IntroContainer } from "./styled"

const Intro = () => (
  <>
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <IntroContainer>
        <header>
          <h1>
            Hello my name is{" "}
            <b>
              {" "}
              <br />
              Sailesh Kumar
            </b>
          </h1>
          <h3>SOFTWARE ENGINEER - Singapore</h3>
        </header>
      </IntroContainer>
    </Wrapper>
  </>
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "intro/photo2.png" }) {
        childImageSharp {
          fluid(maxWidth: 386) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      imgStyle={{ objectPosition: "top center" }}
      durationFadeIn={50}
    />
  )
}

export default Intro
