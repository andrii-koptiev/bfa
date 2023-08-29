import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageKeysEnum } from '../enums';

export const useToggleTranslation = () => {
  const [activeLng, setActiveLng] = useState<LanguageKeysEnum>(
    LanguageKeysEnum.UA,
  );
  const { i18n } = useTranslation();

  const handleToggleLanguage = (languageKey: LanguageKeysEnum) => {
    setActiveLng(languageKey);
    i18n.changeLanguage(languageKey);
  };
  return { handleToggleLanguage, activeLng };
};
