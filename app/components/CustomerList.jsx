"use client";

import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import LoadingSpinner from './LoadingSpinner.jsx';

const CustomerList = ({ customers = [], loadMoreItems, hasNextPage, openModal }) => {
  const itemCount = hasNextPage ? customers.length + 1 : customers.length;

  const isItemLoaded = (index) => !hasNextPage || index < customers.length;

  const Row = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return (
        <div style={style} className="flex justify-center items-center p-2 border-b">
          <LoadingSpinner />
        </div>
      );
    }

    const customer = customers[index];
    return (
      <div
        style={style}
        className="flex justify-between items-center p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-200"
      >
        <div className="text-gray-100 font-semibold text-lg" data-testid={`customer-${customer.name}`}>{customer?.name || 'N/A'}</div>
        <div className="text-gray-400 text-md">{customer?.email || 'N/A'}</div>
        <div className="text-gray-400 text-md">{customer?.phone || 'N/A'}</div>
        <div className={`text-md ${customer?.gender === 'Female' ? 'text-pink-500' : 'text-blue-400'}`}>
          {customer?.gender || 'N/A'}
        </div>
        <button
          onClick={() => openModal(customer)}
          className="text-gray-400 hover:text-gray-200 transition duration-200 text-xl"
        >
          ...
        </button>
      </div>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          role="list"
          height={500}
          itemCount={itemCount}
          itemSize={60}
          width={'100%'}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Row}
        </List>
      )}
    </InfiniteLoader>
  );
};

export default CustomerList;
