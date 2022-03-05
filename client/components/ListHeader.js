import React from 'react';

const ListHeader = ({ ingredientsLength }) => {
  return (
    <div className="list-header">
      <h3>Shopping List ({ingredientsLength.length} items)</h3>
    </div>
  );
};

export default ListHeader;
