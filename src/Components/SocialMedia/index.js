import React, { Component } from "react";
import axios from "axios";
import {
  SocialSection,
  Social,
  SocialDesc,
  Span,
  SpanInfo,
  Icon,
} from "./style.js";
class SocialMedia extends Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get("js/data.json").then((res) => {
      this.setState({ social: res.data.social });
    });
  }
  render() {
    const { social } = this.state;
    const socialList = social.map((socialItem) => {

      return (
        <Social key={socialItem.id} item={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <SocialDesc>
            <Span>{socialItem.title}</Span>
            <SpanInfo>{socialItem.body}</SpanInfo>
          </SocialDesc>
        </Social>
      );
    });
    return (
      <SocialSection>
       {socialList}
      </SocialSection>
    );
  }
}
export default SocialMedia;
