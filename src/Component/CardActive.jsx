import React from "react";

import CardFooter from "./Cardfooter";
import Chart from "./Chart";
import CountUp from "react-countup";

const Card = ({ name, data: { confirmed, recovered, deaths } }) => {
    if (confirmed && name == "Total Cases") {
        const active = confirmed.value - (recovered.value + deaths.value);
        const style = {
            backgroundColor: "#2161f3",
        };
        const style2 = {
            backgroundColor: "#a7b7fd",
        };
        return (
            <div className="Card">
                <h2 className="textGrey nameCard"> {name}</h2>
                <div className="Cardcases">
                    <CountUp start={0} end={confirmed.value} separator="," duration={1.5} />
                </div>
                <div className="chartCon">
                    <Chart name={"confirmed"} value={confirmed.value} value2={active} style={style} />
                </div>
                <div className="cardCardFooter">
                    <CardFooter name={"confirmed"} value={confirmed.value} style={style} />
                </div>
                <div>
                    <CardFooter name={"Active"} value={active} style={style2} />
                </div>
            </div>
        );
    } else if (confirmed && name == "Closed Cases") {
        const style = {
            backgroundColor: "#f99900",
        };
        const style2 = {
            backgroundColor: "#ea1b1b",
        };
        const closedcases = deaths.value + recovered.value;
        return (
            <div className="Card">
                <h2 className="textGrey nameCard"> {name}</h2>
                <div className="Cardcases">
                    <CountUp start={0} end={closedcases} separator="," duration={1.5} />
                </div>
                <div className="chartCon">
                    <Chart value={recovered.value} value2={deaths.value} style={style} name={"recovered"} />
                </div>

                <div className="cardCardFooter">
                    <CardFooter name={"recovered"} value={recovered.value} style={style} />
                </div>
                <div>
                    <CardFooter name={"death"} value={deaths.value} style={style2} />
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Card;
