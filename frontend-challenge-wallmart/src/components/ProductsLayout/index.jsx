import React from 'react'
export const ProductsLayout = ({ children }) => {
  return (
    <div className="py-1 mx-auto">
      <div className="grid gap-6 grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 place-content-around">
        {children}
      </div>
    </div>
  );
};
