import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HomeWrapper = styled.div`
  background-image: url('https://media.architecturaldigest.com/photos/6438246438bd28841d4d1c3b/16:9/w_2560%2Cc_limit/DSC08591%25202-Edit.jpg');
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeContainer = styled.div`
  max-width: 800px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.8); /* Adjust the alpha (fourth) value for transparency */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px); /* Adjust the blur value as needed */
`;

const WelcomeMessage = styled.h1`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
`;

const FeaturedSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Feature = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const FeatureTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
  font-size: 20px;
`;

const FeatureDescription = styled.p`
  color: #555;
  font-size: 16px;
`;

const CallToActionButton = styled(Link)`
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
const HighlightedText = styled.span`
  font-weight: bold;
  font-style: italic;
  color: #007bff; 
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <WelcomeMessage>Welcome to <HighlightedText>Pilgrim Estate</HighlightedText></WelcomeMessage>

        <FeaturedSection>
          <Feature>
            <FeatureTitle><HighlightedText>Innovative</HighlightedText> Approach</FeatureTitle>
            <FeatureDescription>
              Pilgrim Estate offers an innovative approach to the real estate market, solving existing problems, and providing a modern experience.
            </FeatureDescription>
          </Feature>

          <Feature>
            <FeatureTitle>Find Your Perfect <HighlightedText>Property</HighlightedText></FeatureTitle>
            <FeatureDescription>
              Use our advanced filters to discover the ideal property for you - whether it's an apartment, house, ongoing project, or even a forest.
            </FeatureDescription>
          </Feature>
        </FeaturedSection>

        <CallToActionButton to="./SignUp">Contact Us</CallToActionButton>
      </HomeContainer>
    </HomeWrapper>
  );
};
