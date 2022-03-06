import React from "react";
import Table from "./Components/Table";
import Data from "./Data/example-data.json";

const App = () => {
        return (
                <>
                        <div className="item delete">SHOW/HIDE KIDS</div>
                        <div className="item showKids">DELETE BUTTONS</div>
                        <div className="app">
                                <Table arrayOfObjects={Data} key={JSON.stringify(Data)} />
                        </div>
                </>
        );
};

export default App;
