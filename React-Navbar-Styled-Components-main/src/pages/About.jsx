import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8); /* Adjust the alpha (fourth) value for transparency */
  border-radius: 8px;
  backdrop-filter: blur(5px); /* Adjust the blur value as needed */
`;
const CenteredAboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed to center vertically */
`;
const Section = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
`;
const AppWrapper = styled.div`
  background-image: url('https://wallpapers.com/images/hd/real-estate-modern-white-house-dcxpp5xsw4e7wqgc.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.h2`
  color: #555;
  font-size: 24px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: #777;
  font-size: 18px;
  line-height: 1.5;
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const About = () => {
  return (
    <AppWrapper>
    <CenteredAboutContainer>
    <AboutContainer>
      <Title>About Us</Title>

      <Section>
        <Subtitle>Our Mission</Subtitle>
        <Description>
          At <Highlight>Pilgrim EST</Highlight>, our mission is to open up the RE market and <Highlight>empower</Highlight> individuals and businesses by providing <Highlight>innovative solutions</Highlight> that drive <Highlight>success</Highlight>.
        </Description>
      </Section>

      <Section>
        <Subtitle>Why Choose Us</Subtitle>
        <Description>
          With a <Highlight>dedicated team</Highlight> and a commitment to <Highlight>excellence</Highlight>, we stand out as a reliable partner for your needs. Here are some reasons to choose us:
          <ul>
            <li>Quality Services</li>
            <li>Customer Satisfaction</li>
            <li>Innovation and Technology</li>
            <li>Transparent Communication</li>
          </ul>
        </Description>
      </Section>

      <Button>Contact Us</Button>
    </AboutContainer>
    </CenteredAboutContainer>
    </AppWrapper>
  );
};

export default About;
