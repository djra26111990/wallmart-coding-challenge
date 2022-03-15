import React from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import { MenuIcon } from "../SearchBar/MenuIcon";
import { CarIcon } from "./CarIcon";
import { ShoppingIcon } from "./ShoppingIcon";

export const Header = () => {
  const PRODUCTS_ADDED = 0

  return (
    <>
      <header className="text-gray-600 body-font bg-science-blue-500">
        <div className="flex flex-nowrap items-center p-2 flex-col justify-center md:flex-row md:space-x-4">
          <a className="title-font font-medium items-center text-gray-900 mb-4 ml-4 md:ml-0 md:mb-0">
            <Logo />
          </a>
          <Button>
            <MenuIcon />
            <span className="inline-flex items-center justify-center ml-1 px-2 py-1 text-sm leading-none text-white">
              Categorías
            </span>
          </Button>
          <SearchBar />
          <Button>
            <CarIcon />
            <span className="inline-flex items-center justify-center px-2 py-1 text-sm leading-none text-white bg-amber-500 rounded-full">
              {PRODUCTS_ADDED}
            </span>
          </Button>
          <Button customTheme="font-bold mt-2 md:mt-0 bg-lime-600 hover:bg-lime-700 py-2 px-4 rounded inline-flex items-center">
            <ShoppingIcon />
            <span className="inline-flex items-center justify-center ml-1 px-2 py-1 text-sm leading-none text-white">
              Supermercado
            </span>
          </Button>
        </div>
      </header>
    </>
  );
};
