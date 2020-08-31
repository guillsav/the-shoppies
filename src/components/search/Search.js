import React from 'react';
import Input from '../global/input/Input';
import Submit from '../global/btn/Btn';

const Search = ({ handleChange, handleSubmit, error, values }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Enter a movie title..."
      />
      {error && <span>{error}</span>}
      <Submit type="submit" text="Search" />
    </form>
  );
};

export default Search;
