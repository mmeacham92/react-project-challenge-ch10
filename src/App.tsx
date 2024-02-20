import { useState } from "react";
import ColorContainer from "./components/ColorContainer";
import SearchColor from "./components/SearchColor";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hexValue, setHexValue] = useState<string>("");
  const [isDarkText, setIsDarkText] = useState<boolean>(true);

  return (
    <main>
      <ColorContainer
        searchTerm={searchTerm}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <SearchColor
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;
