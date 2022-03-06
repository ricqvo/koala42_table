import { useState } from "react";
import Table from "./Table";

const Row = ({ object, index, key2, onDelete }) => {
        let kidsTrue = Object.values(object.kids).length;

        const [kidsHidden, setKidsVisibility] = useState(true);

        const showKids = () => {
                setKidsVisibility(!kidsHidden);
        };

        const handleDelete = () => {
                onDelete(key2);
        };

        return (
                <div className="row" id={index}>
                        {Object.values(object.data).map((item, index) => {
                                if (index === 0 && kidsTrue) {
                                        return (
                                                <div
                                                        className="item cursor delete"
                                                        key={JSON.stringify(item + "item" + index)}
                                                        onClick={showKids}
                                                >
                                                        {item}
                                                </div>
                                        );
                                } else if (index === Object.values(object.data).length - 1) {
                                        return (
                                                <div
                                                        className="item cursor showKids"
                                                        key={JSON.stringify(item + "item" + index)}
                                                        onClick={handleDelete}
                                                >
                                                        {item}
                                                </div>
                                        );
                                } else {
                                        return (
                                                <div className="item" key={JSON.stringify(item + "item" + index)}>
                                                        {item}
                                                </div>
                                        );
                                }
                        })}
                        {kidsTrue ? (
                                <div className={`${kidsHidden && "hidden"}`}>
                                        <Table arrayOfObjects={Object.values(Object.values(object.kids)[0])[0]} />
                                </div>
                        ) : null}
                </div>
        );
};

export default Row;
