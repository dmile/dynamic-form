import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import TextField from "./fields/text/TextField";
import SelectField from "./fields/select/SelectField";
import CheckboxField from "./fields/checkbox/CheckboxField";

const renderField = ({type, ...otherProps}) => {
    switch (type) {
        case 'text':
            return <TextField {...otherProps}/>;
        case 'select':
            return <SelectField {...otherProps}/>;
        case 'checkbox':
            return <CheckboxField {...otherProps}/>;
        default:
            throw new Error(`Unsupported field type ${type}`);
    }
};


const DynamicForm = ({formName, fields, ...otherProps}) => (
    <form {...otherProps} name={formName} className="form-horizontal">
        {fields.map(renderField)}
        <div className="form-group text-center">
            <div>
                <Button bsStyle="primary" type="submit">Submit</Button>
            </div>
        </div>
    </form>
);


DynamicForm.propTypes = {
    formName: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    })).isRequired
};

export default DynamicForm;