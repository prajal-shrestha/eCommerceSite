import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import ProductList from "../../containers/ProductList";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (term) => {
    console.log(term)
    setSearchTerm(term);
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <ProductList searchTerm={searchTerm} />
    </>
  );
};

export default Search;
