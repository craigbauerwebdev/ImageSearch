import { useState } from "react";
import ImageList from "./Components/ImageList";
import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import { accessKey } from "./keys";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImages(term, accessKey);
    setSearchResults(results);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={searchResults} />
    </div>
  );
}

export default App;
