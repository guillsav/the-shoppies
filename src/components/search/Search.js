import React from 'react';

import Input from '../global/input/Input';
import { InputContainer } from './Search.styles';
import { ReactComponent as MagnifyingGlass } from '../../images/search.svg';

const Search = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <MagnifyingGlass />
        <Input
          onChange={handleChange}
          type="text"
          name="search"
          placeholder="Enter a movie title..."
        />
      </InputContainer>
    </form>
  );
};

export default Search;
