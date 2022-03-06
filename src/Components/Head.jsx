const Head = ({ arrayOfKeys }) => {
        return (
                <div className="row">
                        {arrayOfKeys.map((headItem, index) => {
                                return (
                                        <div
                                                className="item head bold"
                                                key={JSON.stringify(headItem + "headItem" + index)}
                                        >
                                                {headItem}
                                        </div>
                                );
                        })}
                </div>
        );
};

export default Head;
