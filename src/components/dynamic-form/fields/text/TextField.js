import React from 'react';
import PropTypes from "prop-types";

import './TextField.css'

const TextField = ({id, label, ...otherProps}) => (
    <div className="form-group">
        <label htmlFor={id} className="text-field-label control-label">
            {label}
        </label>
        <div className="text-field-container">
            <input {...otherProps} id={id} type="text" className="form-control"/>
        </div>
    </div>
);


TextField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextField;