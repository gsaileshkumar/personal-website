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
          Love to create software that is useful for human and make lives easier. 
          I would like to solve complex problems right from the ground by doing clear research 
          on the topic and understanding the bottleneck, finally come up with an acceptable solution. 
        </p>
        <p>
          I am a tech geek and love to explore all the latest development in the web community.
          Blockchain enthusiasts and explorer.
        </p>
        <p>
          Technologies that I love experimenting and use in my everyday life includes Next.js, web3.js, 
          Hardhat, ethers.js, Truffle, Solidity, Python, NodeJS, Azure, InfluxDB, AWS, Apache Kafka, Arduino, 
          Raspberry Pi, ESPs, Mosquitto MQTT and Node-Red
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
