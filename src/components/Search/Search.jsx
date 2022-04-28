import React, { useState } from "react";
import { useGlobalContext } from "../../context";

import { Wrapper, Input, Button } from "./SearchStyles";

const Search = () => {
  const {
    loading,
    searchMovie,
    setSearchMovie,
    movie,
    setMovie,
    input,
    setInput,
  } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchMovie(input);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Search movie titles"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Wrapper>
  );
};

export default Search;
