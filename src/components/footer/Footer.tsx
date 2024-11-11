import React from "react";
import { useTranslations } from "../hooks/useTranslations";
import { FooterButtons, FooterContent, FooterLinks, FooterText } from "./FooterStyles";

const Footer: React.FC = () => {

  const t = useTranslations();
  
  return (
    <FooterContent className="footer">
        <FooterText className="footer__text">{t.footer.text}</FooterText>
        <FooterLinks className="footer__links">
          <FooterButtons href="https://x.com/sepape_frontend" target="_blank" rel="noopener noreferrer">
          {t.footer.twitter}
          </FooterButtons>
          <FooterButtons href="https://github.com/GitSepape" target="_blank" rel="noopener noreferrer">
          {t.footer.github}
          </FooterButtons>
          <FooterButtons href="https://sepape.com" target="_blank" rel="noopener noreferrer">
          {t.footer.web}
          </FooterButtons>
        </FooterLinks>
    </FooterContent>
  );
};

export default Footer;
