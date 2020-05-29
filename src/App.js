import React from "react";
import "./App.css";

import { gobalData, country } from "./API";
import Header from "./Component/Header";
import CardActive from "./Component/CardActive";
import Table from "./Component/Table";
class App extends React.Component {
    state = {
        data: {},
        countrys: "",
    };

    async componentDidMount() {
        const data = await gobalData();
        this.setState({ data });
        const countrys = await country();
        this.setState({ countrys });
    }

    render() {
        return (
            <div className="App-bg">
                {/* <div className="map">Map</div> */}
                <div className="info ">
                    <Header location="worldwide" data={this.state.data} />
                    <div className="containerCards">
                        <CardActive name="Total Cases" data={this.state.data} />
                        <div className="cardLine" />
                        <CardActive name="Closed Cases" data={this.state.data} />
                    </div>
                    <Header location="Surveillance table" />
                    <div className="container">
                        <Table countrys={this.state.countrys} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
