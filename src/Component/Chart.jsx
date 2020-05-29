import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = ({ value, value2, name }) => {
    if (name === "confirmed") {
        const data = {
            datasets: [
                {
                    borderWidth: 0,
                    margin: 0,
                    data: [value, value2],
                    backgroundColor: ["#2161f3", "#a7b7fd"],
                },
            ],
        };
        return (
            <div>
                <Doughnut data={data} />
            </div>
        );
    } else {
        const data = {
            datasets: [
                {
                    borderWidth: 0,
                    data: [value, value2],
                    backgroundColor: ["#f99900", "#ea1b1b"],
                },
            ],
        };
        return (
            <div>
                <Doughnut data={data} />
            </div>
        );
    }
};

export default Chart;
