import React from "react";
import Select from "react-select";

const Option = ({ option, defaultValue, onChange }) => {
    return (
        <div className="option">
            <Select
                options={option}
                className="width"
                isSearchable={false}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </div>
    );
};

export default Option;
