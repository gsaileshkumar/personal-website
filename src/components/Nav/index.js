import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Icons from "./icons"
import links from "./content"
import { Wrapper } from "./styled"

const Nav = () => (
  <Wrapper>
    <ul>
      {links.map((link, i) => {
        const Icon = Icons[link.label]
        return (
          <li key={i}>
            {" "}
            <AniLink paintDrip to={link.url} hex="#4c5fb0" duration={0.5}>
              {" "}
              <Icon /> {link.label}{" "}
            </AniLink>{" "}
          </li>
        )
      })}
    </ul>
  </Wrapper>
)

export default Nav
