import React, { FC } from "react";
import { generatePath, useParams } from "react-router-dom";

import LinkCommon from "../../../components/LinkCommon";
import { ClientMappedInterface } from "../../../interfaces";

interface Props {
  row: ClientMappedInterface;
  route: string;
  state: any;
}

const ClientsLinkColumn: FC<Props> = ({ row, route, state }) => {
  const clientId = useParams<any>().clientId;

  const path = generatePath(route, {
    clientId
  });

  return (
    <LinkCommon key={row.id} href={path} state={state} color="primary">
      {row.name}
    </LinkCommon>
  );
};

export default ClientsLinkColumn;
