import React from 'react';

const ListHeader = ({ ingredientsLength }) => {
  return (
    <div className="list-header">
      <h2>Shopping List ({ingredientsLength.length} items)</h2>
    </div>
  );
};

export default ListHeader;
