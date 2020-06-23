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
