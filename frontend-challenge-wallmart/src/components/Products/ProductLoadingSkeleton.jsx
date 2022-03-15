import React from 'react'
import { Button } from "../Button";

export const ProductLoadingSkeleton = () => {
  const products = [0, 1, 2, 3, 4, 5, 0, 1, 2];
  return (
    <div className="py-24 mx-auto">
      <div className="grid gap-6 grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 place-content-around">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="md:w-full shadow-lg bg-white rounded-lg border-gray-200 animate-pulse"
            >
              <div>
                <div className="bg-slate-200 border-b-2 w-full h-80"></div>
                <div className="bg-white w-full my-4">
                  <div className="py-2 px-4 rounded-full inline-flex space-x-5 items-center align-middle">
                    <span className="bg-slate-200 rounded h-2 w-20 inline-flex items-center justify-center px-4 text-xs leading-none align-middle"></span>
                    <span className="bg-slate-200 rounded h-2 w-28 inline-flex items-center justify-center px-4 text-xs leading-none align-middle"></span>
                  </div>
                  <br />
                  <div className="py-2 px-4 rounded-full inline-flex space-x-5 items-center align-middle">
                    <span className="bg-slate-200 rounded h-2 w-28  inline-flex items-center justify-center px-4 text-xs leading-none align-middle"></span>
                    <span className="bg-slate-200 rounded-full h-2 w-2  inline-flex items-center justify-center px-4 text-xs leading-none align-middle"></span>
                  </div>
                  <br />
                  <div className="py-2 px-4 rounded-full inline-flex space-x-5 items-center align-middle">
                    <span className="bg-slate-200 rounded h-2 w-28 inline-flex items-center justify-center px-4 text-xs leading-none align-middle"></span>
                  </div>
                  <div className="items-center text-left ml-2 space-x-2 p-3">
                    <div className="py-2 px-4 rounded-full inline-flex items-center border-2 align-middle border-slate-200">
                      <span className="bg-slate-200 rounded h-2 w-20 py-1 inline-flex items-center justify-center px-4 text-xs leading-none align-middle text-venice-blue-300"></span>
                    </div>
                    <div className="py-2 px-4 rounded-full inline-flex items-center border-2 align-middle border-slate-200">
                      <span className="bg-slate-200 rounded h-2 w-20 inline-flex items-center justify-center px-4 text-xs leading-none align-middle text-venice-blue-300"></span>
                    </div>
                  </div>
                  <div className="items-center text-center p-4">
                    <Button customTheme="mt-2 md:mt-0 bg-white py-2 px-4 rounded-full items-center shadow">
                      <span className="bg-slate-200 rounded h-2 w-20 inline-flex items-center justify-center px-2 text-xs leading-none align-middle text-venice-blue-300"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
