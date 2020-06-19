import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import { WorksContainer, WorkItem, WorkImage } from "./styled"

const Works = () => (
  <>
    <Wrapper>
      <Content>
        <h1>Work</h1>
        <p>
          I am a Software Engineer at <b>ChordX.</b>
        </p>
        <p>
          My handy techs include Node.js, Postgres, React.js, Angular and Python
        </p>
        <p>
          Tech stack that I'm recently working on is based on TICK stack.
          Additionally using Python, Golang, Kafka and Grafana
        </p>

        {/* <WorksContainer>
                    <WorkItens/>
                </WorksContainer> */}
      </Content>
    </Wrapper>
  </>
)

const WorkItens = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "works" } }) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <WorkItem>
      {data.allFile.edges.map((image, key) => (
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WorkImage key={key} fluid={image.node.childImageSharp.fluid} />
        </a>
      ))}
    </WorkItem>
  )
}

export default Works
