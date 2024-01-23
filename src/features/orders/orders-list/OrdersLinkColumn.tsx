import React, { FC } from 'react';
import { generatePath, useParams } from 'react-router-dom';

import LinkCommon from '../../../components/LinkCommon';
import { OrderMappedInterface } from '../../../interfaces';
import { OrderLevelRouteParams } from '../../../navigation/types';

interface Props {
  row: OrderMappedInterface;
  route: string;
  state: any;
}

const OrdersLinkColumn: FC<Props> = ({ row, route, state }) => {
  const orderNumber = useParams<OrderLevelRouteParams>().orderNumber;

  const path = generatePath(route, {
    orderNumber,
  });

  return (
    <LinkCommon key={row.id} href={path} state={state} color='primary'>
      {row.orderNumber}
    </LinkCommon>
  );
};

export default OrdersLinkColumn;
