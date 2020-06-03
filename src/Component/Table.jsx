import React from "react";
import NumberFormat from "react-number-format";

class Table extends React.Component {
    state = {
        TableHeader: ["ID", "Country", "Totalconfirmed", "Newcase", "Newdeaths", "Totalrecovered", "Totaldeaths"],
        color: false,
    };

    Tablebody = (countrys) => {
        return countrys.map((country, index) => {
            const { Country, Newcase, Newdeaths, Totalconfirmed, Totalrecovered, day, Totaldeaths } = country;

            return (
                <tr key={index}>
                    <td className="id">{index + 1}</td>
                    <td>{Country}</td>
                    <td>
                        <NumberFormat value={Totalconfirmed} displayType={"text"} thousandSeparator={true} />
                    </td>
                    <td>
                        <NumberFormat value={Newcase ? Newcase : 0} displayType={"text"} thousandSeparator={true} />
                    </td>
                    <td>
                        {" "}
                        <NumberFormat value={Newdeaths ? Newdeaths : 0} displayType={"text"} thousandSeparator={true} />
                    </td>
                    <td>
                        {" "}
                        <NumberFormat value={Totalrecovered} displayType={"text"} thousandSeparator={true} />
                    </td>
                    <td>
                        {" "}
                        <NumberFormat value={Totaldeaths} displayType={"text"} thousandSeparator={true} />
                    </td>
                </tr>
            );
        });
    };
    style = () => {
        this.setState({ color: true });
    };

    getstyle = () => {
        if (this.color) {
            return {
                backgroundColor: "a7b7fd !important",
            };
        }
    };

    render() {
        if (this.props.countrys.length > 1) {
            return (
                <div className="table" id="sticky">
                    <table className="tableinner">
                        <tbody>
                            <tr>
                                <th className="id">ID</th>
                                {/* <th onClick={() => this.props.sortedData("Totalconfirmed")}>Country</th> */}
                                <th>Country</th>
                                <th>Total confirmed</th>
                                <th>New cases</th>
                                <th>New deaths</th>
                                <th>Total recovered</th>
                                <th>Total deaths</th>
                            </tr>{" "}
                            {this.Tablebody(this.props.countrys)}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Table;
