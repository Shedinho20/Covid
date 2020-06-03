import React from "react";
import "./App.css";

import { gobalData, country, countries, specCountry } from "./API";
import Header from "./Component/Header";
import CardActive from "./Component/CardActive";
import Table from "./Component/Table";
import Option from "./Component/Option";
class App extends React.Component {
    state = {
        data: {},
        countrys: "",
        option: "",
        defaultValue: { label: "Global", value: "Global" },
        location: "Global",
    };

    async componentDidMount() {
        const data = await gobalData();
        this.setState({ data });
        const countrys = await country();
        const sortedData = [...countrys].sort((a, b) => {
            return b.Totalconfirmed - a.Totalconfirmed;
        });
        const option = await countries();
        this.setState({ option });
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
        this.setState({ countrys: filteredCountries });
    };

    onChange = async (value) => {
        if (value.value === "Global") {
            const data = await gobalData();
            this.setState({ data });
        } else {
            this.setState({ location: value.value });
            const data = await specCountry(value.value);
            this.setState({ data });
        }
    };

    render() {
        return (
            <div className="App-bg">
                {/* <div className="map">Map</div> */}
                <div className="info ">
                    <Header location={this.state.location} data={this.state.data} />
                    <div className="option">
                        <Option
                            option={this.state.option}
                            defaultValue={this.state.defaultValue}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="containerCards">
                        <CardActive name="Total Cases" data={this.state.data} />
                        <div className="cardLine" />
                        <CardActive name="Closed Cases" data={this.state.data} />
                    </div>
                    <Header location="Surveillance table" data={this.state.data} />
                    <div className="container">
                        <Table countrys={this.state.countrys} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
