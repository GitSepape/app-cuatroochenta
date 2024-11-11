import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useTranslations } from "../hooks/useTranslations";
import ContactForm from "../form/contact/ContactForm";
import { SidebarCitys, SidebarContainer, SidebarForm, SidebarSearch, SidebarSearchButton, SidebarSearchInput, SidebarSelectors } from "./SidebarStyles";

interface SearchProps {
  newLocation: (loc: string) => void;
}

const Sidebar: React.FC<SearchProps> = ({ newLocation }) => {
  const [city, setCity] = useState<string>("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit = (e: FormEvent) => {
    console.log({ city });
    e.preventDefault();
    newLocation(city);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleClick = (city: string) => {
    setCity(city);
    console.log({ city });
  }

  const handleCityChange = (city: 'Valencia' | 'Madrid' | 'Barcelona') => {
    setCity(city);
    newLocation(city);
  };

  const t = useTranslations();

  return (
    <SidebarContainer>
      <SidebarForm onSubmit={onSubmit}>
        <SidebarSearch>
          <SidebarSearchInput type="text" className="search-input" placeholder={t.sidebar.search.text} onChange={handleChange} />
          <SidebarSearchButton className="search-button" type="submit">🔍</SidebarSearchButton>
        </SidebarSearch>
        {isMobile ?
          <select onChange={(e) => handleCityChange(e.target.value as 'Valencia' | 'Madrid' | 'Barcelona')}>
            <option>{t.sidebar.search.select}</option>
            <option value="Valencia">Valencia</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
          </select>
          :
          <SidebarSelectors>
            <SidebarCitys className="" type="submit" onClick={() => handleClick("Valencia")}>{t.sidebar.button.valencia}</SidebarCitys>
            <SidebarCitys className="" type="submit" onClick={() => handleClick("Madrid")}>{t.sidebar.button.madrid}</SidebarCitys>
            <SidebarCitys className="" type="submit" onClick={() => handleClick("Barcelona")}>{t.sidebar.button.barcelona}</SidebarCitys>
          </SidebarSelectors>
        }
        <ContactForm></ContactForm>
      </SidebarForm>
    </SidebarContainer>
  );
};

export default Sidebar;
