import React from "react";

const Header = ({ location }) => {
    if (location === "Surveillance table") {
        return (
            <h2 className="header2">
                <span className="textGrey">{location}</span>{" "}
            </h2>
        );
    }
    return (
        <h2 className="header">
            COVID 19 <span className="textGrey">{location}</span>{" "}
        </h2>
    );
};

export default Header;
