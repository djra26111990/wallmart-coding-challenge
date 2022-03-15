import React from 'react'
export const Button = ({ children, customTheme }) => {
  return (
    <>
      {customTheme ? (
        <button className={customTheme}>
          {children}
        </button>
      ) : (
        <button className="bg-venice-blue-500 hover:bg-venice-blue-600 font-bold py-2 px-4 rounded inline-flex items-center align-middle">
          {children}
        </button>
      )}
    </>
  );
};
