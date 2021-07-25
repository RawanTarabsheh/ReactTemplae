import React from "react";
import {
  AboutSection,
  AboutInfo,
  InfoTitle,
  InfoDesc,
  InfoDir,
  Span,
  Anchor,
} from "./style";
const About = () => {
  return (
    <AboutSection>
      <div class="container">
        <AboutInfo>
          <InfoTitle>
            <Span>This is</Span> Me
          </InfoTitle>
          <InfoDir>Creative Director</InfoDir>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
            <Anchor>explicabo</Anchor> maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </AboutInfo>
      </div>
    </AboutSection>
  );
};
export default About;
