interface ISearchColorProps {
    searchTerm: string;
    setSearchTerm: (string: string) => void;
}

const SearchColor: React.FC<ISearchColorProps> = ({ searchTerm, setSearchTerm }) => {

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
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    );
}

export default SearchColor;