//import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import searchImages from "./api";
import { accessKey } from "./keys/keys";

function App() {
  //const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (term) => {
    //console.log("From Child", term);
    console.log(searchImages(term, accessKey));
  };

  return (
    <div className="App">
      App test
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
