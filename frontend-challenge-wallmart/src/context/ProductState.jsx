import React, { useEffect, useState, useMemo } from "react";
import ProductContext from "./ProductContext";
import { useGetProducts } from "../hooks/useProducts";
import config from "../config";

export default ({ children }) => {
  const [products, loading, getProducts] = useGetProducts();
  
  const [searchFilter, setSearchFilter] = useState("");

  const setSearchFilterState = (filter) => {
    setSearchFilter(filter);
  };

    useEffect(() => {
    getProducts(`${config.fetchUrl()}`)
  }, []);

  useEffect(() => {
    getProducts(`${config.fetchUrl()}${searchFilter}`)
  }, [searchFilter])

  return (
    <>
      <ProductContext.Provider
        value={useMemo(
          () => ({
            products,
            loading,
            getProducts,
            searchFilter,
            setSearchFilterState,
          }),
          [products, loading, getProducts, searchFilter, setSearchFilterState]
        )}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

