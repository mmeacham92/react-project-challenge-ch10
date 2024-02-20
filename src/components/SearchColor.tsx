import colorNames from "colornames";

interface ISearchColorProps {
    searchTerm: string;
    setSearchTerm: (string: string) => void;
    setHexValue: (string: string) => void;
    isDarkText: boolean;
    setIsDarkText: (value: boolean) => void;
}

const SearchColor: React.FC<ISearchColorProps> = ({
    searchTerm,
    setSearchTerm,
    setHexValue,
    isDarkText,
    setIsDarkText
}) => {

    return (
        <form action="" className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Color</label>
            <input
                autoFocus
                type="text"
                id="search"
                placeholder="Search Color"
                required
                role="searchbox"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }
                }
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    );
}

export default SearchColor;