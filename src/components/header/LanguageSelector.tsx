import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/language.slice';
import { AppDispatch, RootState } from '../../redux/store';
import { useTranslations } from '../hooks/useTranslations';
import { LanguageButtons, LanguageButtonsContent, LanguageContent } from './HeaderStyles';

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLanguage = useSelector((state: RootState) => state.language.language);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (language: 'en' | 'es') => {
    dispatch(setLanguage(language));
  };

  const t = useTranslations();

  return (
    <LanguageContent>
      <p>{t.header.language.text}:</p>
      {isMobile ?

        <select onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'es')}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        :
        <LanguageButtonsContent>
          <LanguageButtons onClick={() => handleLanguageChange('en')} selected={currentLanguage === 'en'} >
            English
          </LanguageButtons>
          <LanguageButtons onClick={() => handleLanguageChange('es')} selected={currentLanguage === 'es'} >
            Español
          </LanguageButtons>
        </LanguageButtonsContent>
      }
    </LanguageContent>
  );
};

export default LanguageSelector;