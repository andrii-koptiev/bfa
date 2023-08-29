import { FlagComponent, UA, US } from 'country-flag-icons/react/3x2';

import { LanguageKeysEnum } from '../layout/enums';

interface LanguagesMenuData {
  id: LanguageKeysEnum;
  keyName: string;
  icon: FlagComponent;
}

export const languagesMenuData: LanguagesMenuData[] = [
  {
    id: LanguageKeysEnum.UA,
    keyName: 'ua_menu_language_name',
    icon: UA,
  },
  {
    id: LanguageKeysEnum.EN,
    keyName: 'en_menu_language_name',
    icon: US,
  },
];
