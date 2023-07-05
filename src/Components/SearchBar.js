import { useState } from "react";
import "../scss/searchbar.scss";

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
      <form className="search-bar" onSubmit={handleFormSubmit}>
        <p>Enter a search term:</p>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </>
  );
};

export default SearchBar;
