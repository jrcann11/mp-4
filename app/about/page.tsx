"use client";
import styled from "styled-components";

const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #003366;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #007acc;
`;

export default function About() {
    return (
        <AboutContainer>
            <Title>About This Website</Title>
            <Paragraph>
                This website allows users to explore news articles from various countries. The articles displayed are published in the media of the selected country, though their content may not necessarily be related to that country.
            </Paragraph>
            <Paragraph>
                We utilize a <Highlight>powerful news API</Highlight> to bring you the latest headlines, ensuring you stay updated with international perspectives.
            </Paragraph>
            <Paragraph>
                Each article includes a brief summary, source details, and a link to the full story. You can easily browse and filter articles based on your preferred country selection.
            </Paragraph>
            <Paragraph>
                Stay informed with a global perspective, all in one place.
            </Paragraph>
        </AboutContainer>
    );
}