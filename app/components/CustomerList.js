"use client";

import { FixedSizeList as List } from 'react-window';

const CustomerList = ({ customers = [], openModal }) => {
  const Row = ({ index, style }) => {
    const customer = customers[index];
    return (
      <div style={style} className="flex justify-between p-2 border-b">
        <div>{customer?.name || 'N/A'}</div>
        <div>{customer?.email || 'N/A'}</div>
        <div>{customer?.phone || 'N/A'}</div>
        <div>{customer?.gender || 'N/A'}</div>
        <button onClick={() => openModal(customer)}>...</button>
      </div>
    );
  };

  return (
    <List
      height={400}
      itemCount={customers.length}
      itemSize={50}
      width={'100%'}
    >
      {Row}
    </List>
  );
};

export default CustomerList;
