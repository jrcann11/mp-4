'use client'
import Link from "next/link";
import styled from "styled-components";

// Define styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem; /* Adjusted height to 5rem for better flexibility */
  background-color: #282c34; /* Dark background color */
  padding: 0 2rem; /* Added padding on the left and right */
`;

const Title = styled.h2`
  font-size: 2.5rem; /* Adjusted for better scaling */
  font-weight: 600;
  padding: 1rem;
  color: #61dafb; /* Light blue color */
`;

const Nav = styled.nav`
  padding: 0.5rem 1rem;
`;

const StyledLink = styled(Link)`
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.25rem;
  color: #ffffff; /* White text color */
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: #ff6347; /* Tomato color for hover */
  }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Title>News Articles by Country</Title>
            <Nav>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/about">About</StyledLink>
            </Nav>
        </HeaderWrapper>
    );
}