interface IColorContainerProps {
    searchTerm: string;
}

const ColorContainer: React.FC<IColorContainerProps> = ({ searchTerm }) => {

    return (
        <div id="color__container" style={{ backgroundColor: searchTerm }}>
            <p>
                {searchTerm ? searchTerm : "Empty Value" }
            </p>
        </div>
    );
}


export default ColorContainer;