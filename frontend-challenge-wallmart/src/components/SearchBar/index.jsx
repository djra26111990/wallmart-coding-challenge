import React, { useRef, useContext, useMemo } from 'react'
import ProductContext from '../../context/ProductContext';
import { SearchIcon } from "./SearchIcon";
import debounce from 'lodash.debounce';

export const SearchBar = () => {
    const productContext = useContext(ProductContext)
    const { setSearchFilterState } = productContext
    const inputRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = () => {
        setSearchFilterState(inputRef.current.value)
    }

    const debouncedHandleChange = useMemo(
      () => debounce(handleChange, 150)
    , []);

  return (
    <div className="my-2 md:my-0 w-auto md:w-1/2">
      <form onSubmit={handleSubmit}>
        <label className="text-gray-400 focus-within:text-gray-600 block">
          <SearchIcon />
          <input
            ref={inputRef}
            onChange={debouncedHandleChange}
            className="border border-gray-900 py-3 px-8 pl-12 bg-white placeholder-gray-400 rounded-full text-gray-500 appearance-none md:w-full block  focus:outline-none"
            placeholder="¿Qué estás buscando?"
          />
        </label>
      </form>
    </div>
  );
};
