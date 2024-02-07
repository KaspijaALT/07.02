import React from "react";
import styled from "styled-components";

const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Service = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.p`
  color: #555;
`;

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive and interactive websites using modern web technologies.",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications for iOS and Android.",
      icon: "📱"
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Designing visually appealing graphics and branding materials.",
      icon: "🎨"
    },
    // Add more services as needed
  ];

  return (
    <ServicesContainer>
      {services.map((service) => (
        <Service key={service.id}>
          <Icon>{service.icon}</Icon>
          <div>
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
          </div>
        </Service>
      ))}
    </ServicesContainer>
  );
};
