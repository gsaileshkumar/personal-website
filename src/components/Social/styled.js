import styled from "styled-components"
import media from "styled-media-query"

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.lessThan("medium")`
        flex-wrap: wrap;
    `}
`
export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  line-height: 1.3;
  justify-content: space-between;

  ${media.lessThan("small")`
    justify-content: center;
  `}
`
