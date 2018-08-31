import React from 'react';
import PropTypes from "prop-types";


const renderSelectOption = (option) => (
    <option key={option.value} value={option.value}>
        {option.label}
    </option>
);

const SelectField = ({id, label, options, ...otherProps}) => (
    <div className="form-group">
        <label htmlFor={id} className="col-sm-2 control-label">
            {label}
        </label>
        <div className="col-sm-10">
            <select {...otherProps} id={id} className="form-control">
                {options.map(renderSelectOption)}
            </select>
        </div>
    </div>
);


SelectField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired
};

export default SelectField;