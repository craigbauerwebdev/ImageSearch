import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        Enter a search term:
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </>
  );
};

export default SearchBar;
