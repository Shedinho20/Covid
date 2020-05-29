import React from "react";
import CountUp from "react-countup";
const CardFooter = ({ name, value, style }) => {
    return (
        <div className="gridfooter">
            {/* <div className="cardFooter">
            </div> */}
            <div className="box" style={style}></div>
            <div className="cardFooter">
                <h2>{name}</h2>
            </div>
            <CountUp start={0} end={value} separator="," duration={1} />
            {/* <div className="countUp textGrey">
            </div> */}
        </div>
    );
};

export default CardFooter;
