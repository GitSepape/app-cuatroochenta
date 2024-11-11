import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import messagesEn from '../../components/languages/en.json';
import messagesEs from '../../components/languages/es.json';

const messages = {
  en: messagesEn,
  es: messagesEs,
};

export const useTranslations = () => {
  const language = useSelector((state: RootState) => state.language.language);
  return messages[language];
};