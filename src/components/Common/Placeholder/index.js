import React from "react"
import styled from "styled-components"

const StyledPlaceholder = styled.div`
  margin: 1rem auto;
  width: 200px;
  height: 100px;
  background-color: #f7f6f6;
  border-radius: 20px;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`
const AnimatedBackground = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: darkgray;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 100px;
  position: relative;
  border-radius: 20px;
`

export default ({ times = 1 }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.from({ length: times }, (_, i) => (
        <StyledPlaceholder key={i}>
          <AnimatedBackground />
        </StyledPlaceholder>
      ))}
    </div>
  )
}
