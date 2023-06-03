import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import { FC } from 'react';

import ButtonCommon from '../../components/ButtonCommon';
import PageCardCommon from '../../components/PageCardCommon';
import { TEXT_CONSTANTS } from '../../utils';

const ClientsPage: FC = () => {
  return (
    <PageCardCommon
      title={TEXT_CONSTANTS.CLIENTS.PAGE_TITLE}
      subtitle={TEXT_CONSTANTS.CLIENTS.PAGE_SUBTITLE}
      buttonElement={
        <ButtonCommon
          children={TEXT_CONSTANTS.CLIENTS.ADD_BUTTON}
          variant='contained'
          startIcon={<PersonAddAlt1OutlinedIcon />}
        />
      }
    />
  );
};

export default ClientsPage;
