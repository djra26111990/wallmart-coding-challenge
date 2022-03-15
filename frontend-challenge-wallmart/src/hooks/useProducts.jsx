import { useState } from "react";
import apiServices from '../services'

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProducts (fetchUrl) {
    setLoading(true)
    const responseData = await apiServices.getAllProducts(fetchUrl)
     const { data } = responseData
     setProducts(data)
     setLoading(false)
 }

  

  return [products, loading, getProducts];
};
