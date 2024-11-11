import styled from "styled-components";

export const FooterContent = styled.footer`
  background-color: #282c34;
  color: #ffffff;
  text-align: center;
  padding: 15px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const FooterLinks = styled.article`
  display: flex;
  gap: 20px;
`;

export const FooterButtons = styled.a`
  color: #61dafb;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #21a1f1;
  }
`;
