import React from "react";

class Table extends React.Component {
    state = {
        TableHeader: ["ID", "Country", "Totalconfirmed", "Newcase", "Newdeaths", "Totalrecovered", "Totaldeaths"],
    };

    Tablebody = (countrys) => {
        return countrys.map((country, index) => {
            const { Country, Newcase, Newdeaths, Totalconfirmed, Totalrecovered, day, Totaldeaths } = country;
            return (
                <tr key={index}>
                    <td className="id">{index + 1}</td>
                    <td>{Country}</td>
                    <td>{Totalconfirmed}</td>
                    <td>{Newcase ? Newcase : 0}</td>
                    <td>{Newdeaths ? Newdeaths : 0}</td>
                    <td>{Totalrecovered}</td>
                    <td>{Totaldeaths}</td>
                </tr>
            );
        });
    };

    Tableheader = () => {
        return (
            <tr>
                <th className="id">ID</th>
                <th>Country</th>
                <th>Totalconfirmed</th>
                <th>Newcase</th>
                <th>Newdeaths</th>
                <th>Totalrecovered</th>
                <th>Totaldeaths</th>
            </tr>
        );
    };

    render() {
        if (this.props.countrys.length > 1) {
            return (
                <div className="table" id="sticky">
                    <table className="tableinner">
                        <tbody>
                            {this.Tableheader()}
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
