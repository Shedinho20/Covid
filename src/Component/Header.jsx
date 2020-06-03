import React from "react";

const Header = ({ location, data: { lastUpdate } }) => {
    if (location === "Surveillance table") {
        return (
            <h2 className="header2">
                <span className="textGrey">{location}</span>{" "}
            </h2>
        );
    }
    return (
        <div className="header">
            <h2>
                COVID 19 <span className="textGrey">{location}</span>{" "}
            </h2>
            <div id="updated">{new Date(lastUpdate).toDateString()}</div>
        </div>
    );
};

export default Header;
