// import React, { useState } from 'react';

// const toggleLineThru = (boolen) => {
//   if (boolen) {
//     return 'line-through';
//   }

//   if (boolen === false) {
//     return '';
//   }
// };

// const [lineThru, setLineThrough] = useState(false);

// const ShoppingItem = () => {
//   return (
//     <div>
//       <span
//         className="list-item-text"
//         style={{ textDecoration: toggleLineThru(lineThru) }}
//       >
//         {`${ingred[0]} `}
//         {ingred.slice(1).map((ing, idx, array) => (
//           <span key={idx} className="list-item-text">{`(${ing.join(
//             ' '
//           )})`}</span>
//         ))}
//       </span>
//     </div>
//   );
// };

// export default ShoppingItem;
