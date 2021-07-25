import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  ProfileSkillsSec,
  MainProfile,
  ProfileTitle,
  ProfileList,
  ProfileItem,
  SpanWeb,
  Span,
  Skills,
  SkillsDesc,
  SkillsTitle,
  ProfileTitleSpan,
  SkillsTitleSpan,
  ParentSpan,
  Bar,
  BarPerc,
  BarTitle,
  BarParent,
} from "./style.js";

const Profile = () => {
  const [skils, setISkils] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setISkils(res.data.profile);
    });
  }, []);

  const PortfolioSkils = skils.map((skilItem) => {
    return (
      <Bar key={skilItem.id}>
        <BarTitle>{skilItem.title}</BarTitle>
        <BarPerc>{skilItem.perc}</BarPerc>
        <BarParent>
          <ParentSpan sp={skilItem.class}></ParentSpan>
        </BarParent>
      </Bar>
    );
  });

  return (
    <ProfileSkillsSec>
      <div className="container">
        <MainProfile>
          <ProfileTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <Span>Name</Span>
              Hamza Nabil
            </ProfileItem>
            <ProfileItem>
              <Span>Birthday</Span>
              21/1/1996
            </ProfileItem>
            <ProfileItem>
              <Span>Address</Span>
              Ain shams
            </ProfileItem>
            <ProfileItem>
              <Span>Phone</Span>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <Span>Email</Span>
              hamza@hamza.com
            </ProfileItem>
            <ProfileItem>
              <Span>Website</Span>
              <SpanWeb>www.google.com</SpanWeb>
            </ProfileItem>
          </ProfileList>
        </MainProfile>

        <Skills>
          <SkillsTitle>
            Some <SkillsTitleSpan>skills</SkillsTitleSpan>
          </SkillsTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>
          {PortfolioSkils}
        </Skills>
      </div>
    </ProfileSkillsSec>
  );
};
export default Profile;
