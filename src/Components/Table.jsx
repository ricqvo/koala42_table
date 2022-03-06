import { useState } from "react";
import Head from "./Head";
import Row from "./Row";

const Table = ({ arrayOfObjects }) => {
        const [table, setTable] = useState(arrayOfObjects);

        const onDelete = (key) => {
                setTable(table.filter((object) => JSON.stringify(object) !== key));
        };

        return (
                <div className="table">
                        {table.length > 0 && <Head arrayOfKeys={Object.keys(arrayOfObjects[0].data)} />}
                        {table.map((object, index) => {
                                return (
                                        <Row
                                                object={object}
                                                index={index}
                                                key={JSON.stringify(object)}
                                                key2={JSON.stringify(object)}
                                                onDelete={onDelete}
                                        />
                                );
                        })}
                </div>
        );
};

export default Table;
