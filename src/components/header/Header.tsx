import React from "react";
import { Title, TopBar } from "./HeaderStyles";
import Logo from "./Logo";
import { useTranslations } from "../hooks/useTranslations";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  const t = useTranslations();

  return (
    <TopBar>
      <Logo></Logo>
      <Title>{t.header.title.text}</Title>
      <LanguageSelector></LanguageSelector>
    </TopBar>
  );
};

export default Header;