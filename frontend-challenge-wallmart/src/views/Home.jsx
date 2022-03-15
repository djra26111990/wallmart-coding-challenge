import React from 'react'
import { Header } from "../components/Header";
import { TopBanner } from "../components/TopBanner";
import { ProductsList } from "../components/ProductsList";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <TopBanner />
      <Header />
      <ProductsList />
      <Footer />
    </>
  );
};
