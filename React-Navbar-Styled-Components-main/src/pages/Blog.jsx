import React from "react";
import styled from "styled-components";

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* Adjust the alpha (fourth value) for transparency */
  border-radius: 8px;
  backdrop-filter: blur(5px); /* Adjust the blur value */
  border: none; /* Remove the border */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow for separation */
`;

const BlogPost = styled.div`
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 15px;
  background-color: white;
`;
const Title = styled.h2`
  color: #333;
`;

const Author = styled.p`
  color: #555;
  font-style: italic;
`;

const Content = styled.p`
  color: #333;
`;

const HomeWrapper = styled.div`
  background-image: url('https://img3.wallspic.com/crops/7/7/6/6/4/146677/146677-design-sky-architect-facade-light-2560x1440.jpg');
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "John Doe",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget leo sed urna ullamcorper fermentum. Integer auctor mauris nec tortor blandit, id blandit odio fringilla."
    },
    {
      id: 2,
      title: "Styled Components for Styling",
      author: "Jane Smith",
      content:
        "Duis euismod quam sed tincidunt fermentum. Curabitur laoreet nisi in urna vehicula, vel interdum justo accumsan. Phasellus non lacinia risus. Ut ut justo ac nisi euismod volutpat."
    },
    {
      id: 3,
      title: "JavaScript ES6 Features Every Developer Should Know",
      author: "Bob Johnson",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Suspendisse potenti. Mauris consectetur cursus leo, a gravida felis ultricies non."
    },
    {
      id: 4,
      title: "Building Scalable REST APIs with Node.js and Express",
      author: "Alice Williams",
      content:
        "Fusce eu mauris nec metus efficitur tincidunt. Nunc dignissim justo at purus laoreet, vel ullamcorper velit facilisis. Sed sagittis, dolor vel aliquet aliquet, est justo luctus metus, sit amet fermentum tortor turpis sit amet mauris."
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals: A Beginner's Guide",
      author: "Charlie Brown",
      content:
        "Integer fermentum velit vitae ex ultricies tincidunt. Mauris ultrices arcu sit amet cursus ultricies. Quisque non justo vel quam fermentum auctor a sit amet lacus. Suspendisse eu justo et quam pellentesque tempor non vel velit."
    },
  ];
  return (
    <HomeWrapper>
      <BlogContainer>
        {blogPosts.map((post) => (
          <BlogPost key={post.id}>
            <Title>{post.title}</Title>
            <Author>By {post.author}</Author>
            <Content>{post.content}</Content>
          </BlogPost>
        ))}
      </BlogContainer>
    </HomeWrapper>
  );
};
