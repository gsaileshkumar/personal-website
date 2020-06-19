import React from "react"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import ContactImage from "../../images/contact/contact.png"

import { ContactWrapper, ImageWrapper, InfosWrapper } from "./styled"

const Contact = () => (
  <>
    <Wrapper>
      <Content>
        <ContactWrapper>
          <InfosWrapper>
            <h1>Contact</h1>
            <p>Let's get in touch or even simply say hi...</p>
            <p>
              <a
                href="https://www.linkedin.com/in/gsaileshkumar/"
                target="__blank"
              >
                Connect with me.
              </a>
            </p>
          </InfosWrapper>
          <ImageWrapper>
            <img src={ContactImage} alt="" />
          </ImageWrapper>
        </ContactWrapper>
      </Content>
    </Wrapper>
  </>
)

export default Contact
