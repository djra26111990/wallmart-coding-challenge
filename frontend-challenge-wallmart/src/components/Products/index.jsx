import React from 'react'
import { Button } from "../Button";
import config from "../../config";
import { PickUpStoreIcon } from "./PickUpStoreIcon";
import { TruckIcon } from "./TruckIcon";
import { ProductsLayout } from "../ProductsLayout";

export const Products = ({ products }) => {
  const formatPriceAmount = (price, symbol) => {
    let amountToFormat = price;
    let amountFormated;

    if (!isNaN(amountToFormat)) {
      amountToFormat = amountToFormat
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
      amountToFormat = amountToFormat
        .split("")
        .reverse()
        .join("")
        .replace(/^[\.]/, "");
      amountFormated = amountToFormat;
    }
    return `${symbol} ${amountFormated}`;
  };

  return (
    <>
      <ProductsLayout>
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="md:w-full shadow-lg bg-white border-gray-200"
            >
              <div>
                <div className="bg-gray-100 w-full border-b-2">
                  <img
                    className="w-full object-scale-down object-center justify-center"
                    src={`${config.url_prefix()}${product.image}`}
                    alt="imagen del producto"
                  />
                </div>
                <div className="bg-white w-full">
                  <span className="text-lg text-gray-600 mx-5">
                    <strong>{product.brand}</strong> {product.description}
                  </span>
                  <br />
                  {product.isPalindrome ? (
                    <>
                      <span className="text-lg text-gray-600 font-bold mx-5">
                        {formatPriceAmount(product.discountPrice, "$")}
                      </span>
                      <span className="text-md text-white rounded-full bg-red-600 mx-2 px-1">
                        {`${product.porcentageDiscount}%`}
                      </span>
                      <br />
                      <span className="text-md text-gray-500 font-bold mx-5 line-through">
                        {formatPriceAmount(product.price, "$")}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg text-gray-600 font-bold mx-5">
                        {formatPriceAmount(product.price, "$")}
                      </span>
                      <br />
                      <span className="text-lg text-gray-600 font-bold mx-5 h-2"></span>
                    </>
                  )}
                  <div className="items-center text-left ml-2 space-x-2 p-3">
                    <div className="py-1 px-3 rounded-full inline-flex items-center border-2 align-middle border-venice-blue-300">
                      <TruckIcon />
                      <span className="inline-flex items-center justify-center px-2 text-xs leading-none align-middle text-venice-blue-300">
                        Despacho
                      </span>
                    </div>
                    <div className="py-1 px-3 rounded-full inline-flex items-center border-2 align-middle border-[#fa6400]">
                      <PickUpStoreIcon />
                      <span className="inline-flex items-center justify-center px-2 text-xs align-middle leading-none text-[#fa6400]">
                        Retiro
                      </span>
                    </div>
                  </div>
                  <div className="items-center text-center p-4">
                    <Button customTheme="font-bold mt-2 md:mt-0 bg-white hover:bg-gray-200 transition ease-linear delay-75 duration-150 py-2 px-10 rounded-full items-center shadow-md">
                      <span className="inline-flex items-center justify-center px-2 text-sm leading-none text-venice-blue-300">
                        Agregar
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ProductsLayout>
    </>
  );
};
