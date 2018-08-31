import React from 'react';
import PropTypes from "prop-types";


const TextField = ({id, label, ...otherProps}) => (
    <div className="form-group">
        <label htmlFor={id} className="col-sm-2 control-label">
            {label}
        </label>
        <div className="col-sm-10">
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