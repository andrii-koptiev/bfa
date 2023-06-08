import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import ButtonCommon from "../../components/ButtonCommon";
import PageCardCommon from "../../components/PageCardCommon";
import { useAppDispatch } from "../../store";
import { selectAllClients } from "../../store/models/clients/selectors";
import { TEXT_CONSTANTS } from "../../utils";
import ClientsList from "./clients-list/ClientsList";

const ClientsPage: FC = () => {
  const dispatch = useAppDispatch();

  const clients = useSelector(selectAllClients);
  useEffect(() => {
    dispatch.clients.getClients();
  }, [dispatch.clients]);

  return (
    <PageCardCommon
      title={TEXT_CONSTANTS.CLIENTS.PAGE_TITLE}
      subtitle={TEXT_CONSTANTS.CLIENTS.PAGE_SUBTITLE}
      buttonElement={
        <ButtonCommon
          children={TEXT_CONSTANTS.CLIENTS.ADD_BUTTON}
          variant="contained"
          startIcon={<PersonAddAlt1OutlinedIcon />}
        />
      }
      contentElement={
        <ClientsList
          items={clients}
          onEditItem={() => {
          }}
          onDeleteItem={() => {
          }}
        />
      }
    />
  );
};

export default ClientsPage;
