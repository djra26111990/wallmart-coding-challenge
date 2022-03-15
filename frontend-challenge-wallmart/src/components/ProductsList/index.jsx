import React, { useContext } from "react";
import { Products } from "../Products";
import { ProductLoadingSkeleton } from "../Products/ProductLoadingSkeleton";
import { ChevronRightIcon } from "../Products/ChevronRightIcon";
import { Button } from "../Button";
import ProductContext from "../../context/ProductContext";

export const ProductsList = () => {
  const productContext = useContext(ProductContext);
  const { searchFilter, products, loading } = productContext;

  return (
    <div>
      <div className="p-4 bg-gray-200 md:flex flex flex-col md:flex-row md:flex-wrap md:place-content-around space-x-5 md:-space-x-5">
        <span className={searchFilter.trim() ? "ml-5 mb-5 md:mb-0 md:ml-0" : "invisible"}>
          Resultados para: <b>{searchFilter}</b>
        </span>
        {loading ? (
          <></>
        ) : (
          <Button customTheme="bg-gray-100 hover:bg-gray-300 font-bold py-2 px-4 transition ease-linear delay-75 duration-150 rounded border-2 border-gray-300 inline-flex items-center md:items-end align-middle">
            <span>Ordenar por: destacados</span>
            <ChevronRightIcon />
          </Button>
        )}
      </div>
      <div className='flex flex-wrap items-center p-2 flex-col justify-center md:flex-row py-2 bg-gray-200'>
        {loading ? (
          <ProductLoadingSkeleton />
        ) : (
          <>
            <Products products={products} />
          </>
        )}
      </div>
      <div className="w-full flex flex-wrap items-center p-2 flex-col justify-center md:flex-row py-2 bg-gray-200">
        <Button customTheme="flex bg-gray-100 w-11/12 justify-between hover:bg-gray-300 font-bold py-2 px-4 transition ease-linear delay-75 duration-150 rounded border-2 border-gray-300 inline-flex items-center md:items-end align-middle">
          <span className="text-venice-blue-300">Ver Información Legal</span>
          <ChevronRightIcon customTheme="text-venice-blue-300 justify-end" />
        </Button>
      </div>
    </div>
  );
};
