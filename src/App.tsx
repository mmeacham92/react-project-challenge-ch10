import { useState } from "react";
import ColorContainer from "./components/ColorContainer";
import SearchColor from "./components/SearchColor";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <main>
      <ColorContainer searchTerm={searchTerm} />
      <SearchColor
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </main>
  );
}

export default App;
