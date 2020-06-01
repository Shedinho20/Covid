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
        const sortedData = [...countrys].sort((a, b) => {
            return b.Totalconfirmed - a.Totalconfirmed;
        });
        this.Filter(sortedData);
    }

    Filter = (sortedData) => {
        const filteredCountries = [...sortedData].filter((element) => {
            return (
                element.Country != "All" &&
                element.Country != "North-America" &&
                element.Country != "South-America" &&
                element.Country != "Europe" &&
                element.Country != "Africa" &&
                element.Country != "Asia"
            );
        });
        console.log(filteredCountries);
        this.setState({ countrys: filteredCountries });
    };

    // sortedData = () => {
    //     const sortedData = [...this.state.countrys].sort((a, b) => {
    //         if (a.Country < b.Country) {
    //             return -1;
    //         } else if (a.Country > b.Country) {
    //             return 1;
    //         } else return 0;
    //     });
    //     this.Filter(sortedData);
    // };

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
                        <Table countrys={this.state.countrys} sortedData={this.sortedData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
