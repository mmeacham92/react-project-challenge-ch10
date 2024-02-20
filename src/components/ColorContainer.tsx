interface IColorContainerProps {
    searchTerm: string;
    hexValue: string;
    isDarkText: boolean;
}

const ColorContainer: React.FC<IColorContainerProps> = ({ searchTerm, hexValue, isDarkText }) => {

    return (
        <div
            id="color__container"
            style={{
                backgroundColor: searchTerm,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>
                {searchTerm ? searchTerm : "Empty Value" }
            </p>
            <p>
                {hexValue ? hexValue : null}
            </p>
        </div>
    );
}


export default ColorContainer;