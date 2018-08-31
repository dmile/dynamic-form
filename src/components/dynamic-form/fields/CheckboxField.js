import React from 'react';
import PropTypes from "prop-types";


const CheckboxField = ({id, label, value, ...otherProps}) => (
    <div className="form-group">
        <div className="col-sm-10 col-sm-offset-2">
            <div className="checkbox">
                <label>
                    <input {...otherProps} id={id} checked={value} type="checkbox"/>
                    {label}
                </label>
            </div>
        </div>
    </div>
);


CheckboxField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CheckboxField;