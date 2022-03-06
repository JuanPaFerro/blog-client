import React from "react";
import StarsRating from "../StarsRating";
import {
  AboutContainer,
  Title,
  Photo,
  Separator,
  ImageFooter,
  BioContainer,
  DarkerSection,
  Quote,
  SkillCategory,
  Skills,
  SkillItem,
  SocialLinksContainer,
  SocialLink,
} from "./About";
import ProjectCard from "../ProjectCard";
import { useAboutInfo } from "../../hooks/useAboutInfo";
import { BsLinkedin, BsGithub, BsEnvelope, BsPhone } from "react-icons/bs";

const About = () => {
  const { image, description, skills } = useAboutInfo();
  return (
    <AboutContainer id="about">
      <Title>ABOUT ME</Title>
      <Separator />
      <BioContainer>
        <div>
          <Photo src={image} />
          <ImageFooter>JUAN PABLO FERRO</ImageFooter>
        </div>
        <div>
          {description.map((el) => (
            <p>{el}</p>
          ))}
        </div>
      </BioContainer>
      <DarkerSection>
        <Title>MY SKILLS</Title>
        <Separator />
        <Quote>
          "We cannot solve our problems with the same thinking we used when we
          created them."
          <br />
          -Albert Einstein
        </Quote>
        {Object.entries(skills).map((category) => (
          <Skills>
            <strong>{category[0]}</strong>
            <SkillCategory>
              {category[1].map((el) => (
                <>
                  <SkillItem>
                    <span>{el.name}</span>
                    <StarsRating stars={el.level} />
                  </SkillItem>
                </>
              ))}
            </SkillCategory>
          </Skills>
        ))}
      </DarkerSection>
      <Title>PROJECTS</Title>
      <Separator />
      <Quote>
        Listed below are all the projects I was involved in during my working
        period at each company with a brief description of the software.
        <br />
        All these projects are property of each company.
      </Quote>
      <ProjectCard />
      <DarkerSection>
        <Title>GET IN TOUCH</Title>
        <Separator />
        <Quote>
          "Quality is more important than quantity. One home run is much better
          than two doubles."
          <br />
          -Steve Jobs
        </Quote>
        <SocialLinksContainer>
          <SocialLink>
            <BsPhone />
            <br />
            <span>+53 54605861</span>
          </SocialLink>
          <SocialLink>
            <BsEnvelope />
            <br />
            <span>juanpabloferroarroyo</span>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/juan-pablo-ferro-a55a58151/">
            <BsLinkedin />
            <br />
            <span>Juan Pablo Ferro</span>
          </SocialLink>
          <SocialLink href="https://github.com/JuanPaFerro">
            <BsGithub />
            <br />
            <span>JuanPaFerro</span>
          </SocialLink>
        </SocialLinksContainer>
      </DarkerSection>
    </AboutContainer>
  );
};

export default About;
