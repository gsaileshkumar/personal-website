import React, { useState, useEffect } from "react"
import moment from "moment"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"
import Placeholder from "../Common/Placeholder"

import { SocialWrapper, SocialContainer } from "./styled"

const Social = () => {
  const [socialData, setSocialData] = useState(null)

  useEffect(() => {
    fetch("https://social-api.saileshkumar.com/content")
      .then(res => res.json())
      .then(data => setSocialData(data))
  }, [])

  const instaData = socialData && socialData.instagram.data
  const twitterData = socialData && socialData.twitter

  return (
    <>
      <Wrapper>
        <Content>
          {socialData ? (
            <SocialWrapper>
              <h1>Twitter</h1>
              <SocialContainer>
                {twitterData
                  .map(tweet => <TwitterTile tweet={tweet} key={tweet.id} />)
                  .filter((_, i) => i < 3)}
              </SocialContainer>
              <h1>Instagram</h1>
              <SocialContainer>
                {instaData
                  .map(post => <InstaTile post={post} key={post.id} />)
                  .filter((_, i) => i < 3)}
              </SocialContainer>
            </SocialWrapper>
          ) : (
            <Placeholder times={8} />
          )}
        </Content>
      </Wrapper>
    </>
  )
}

const TwitterTile = ({ tweet }) => {
  return (
    <a
      href={
        tweet.entities.urls.length && tweet.entities.urls[0].url
          ? tweet.entities.urls[0].url
          : "https://twitter.com/gsaileshkumar"
      }
      target="__blank"
      style={{ fontColor: "inherit", textDecoration: "none" }}
    >
      <div
        style={{
          minHeight: 100,
          width: 250,
          borderRadius: "20px",
          padding: "1rem",
          margin: "0 1rem 1rem 0",
          backgroundColor: "#f7f6f6",
        }}
      >
        <p>{tweet.full_text}</p>
        <span
          style={{
            fontSize: "0.8rem",
            fontStyle: "italic",
            color: "var(--gray7)",
          }}
        >
          {moment(new Date(tweet.created_at)).format("MMM Do YYYY")}
        </span>
      </div>
    </a>
  )
}

const InstaTile = ({ post }) => {
  return (
    <a
      href={post.permalink}
      target="__blank"
      style={{ fontColor: "inherit", textDecoration: "none" }}
    >
      <div
        style={{
          minHeight: 100,
          width: 250,
          borderRadius: "20px",
          padding: "1rem",
          margin: "0 1rem 1rem 0",
          backgroundColor: "#f7f6f6",
        }}
      >
        <img src={post.media_url} alt="instapic" height="215" width="215" />
        <p>{post.caption}</p>
        <span
          style={{
            fontSize: "0.8rem",
            fontStyle: "italic",
            color: "var(--gray7)",
          }}
        >
          {moment(post.timestamp).format("MMM Do YYYY")}
        </span>
      </div>
    </a>
  )
}

export default Social
