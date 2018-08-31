import React, {Component} from 'react';
import {connect} from "react-redux";
import {Alert} from "react-bootstrap"

import DynamicForm from "../../components/dynamic-form/DynamicForm";
import {fetchFields, fieldValueChanged} from "../../actions/fields";


class DynamicFormContainer extends Component {

    componentDidMount = () => {
        const {formName, fetchFields} = this.props;
        fetchFields(formName);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let valuesObj = {};
        this.props.form.fields.forEach(field => {
            valuesObj[field.name] = field.value;
        });
        console.log(valuesObj);
        alert(JSON.stringify(valuesObj, null, 4));
    };

    handleChange = (event) => {
        const target = event.target;
        const formName = target.form.name;
        const fieldName = target.name;
        const fieldValue = target.type === 'checkbox' ? target.checked : target.value;
        this.props.fieldValueChanged(formName, fieldName, fieldValue);
    };

    render = () => (
        this.props.form.isLoading ? this.renderLoader() :
            <DynamicForm
                formName={this.props.formName}
                onSubmit={this.handleSubmit}
                fields={
                    this.props.form.fields.map(field => ({...field, onChange: this.handleChange}))
                }
            />
    );

    renderLoader = () => (
        <Alert bsStyle="info" className="text-center">
            Please wait! Fields are loading...
        </Alert>
    );

}

const mapStateToProps = (state, ownProps) => {
    return {
        formName: ownProps.formName,
        form: state.form
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFields: (formName) => dispatch(fetchFields(formName)),
        fieldValueChanged: (formName, fieldName, fieldValue) => dispatch(fieldValueChanged(formName, fieldName, fieldValue))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(DynamicFormContainer);