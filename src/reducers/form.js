import isEmpty from 'lodash/isEmpty'
import {FETCH_FIELDS_STARTED, FETCH_FIELDS_SUCCESS, FIELD_VALUE_CHANGED} from '../actions/fields'

// in case of special performance requirements we can move form values to separate object (map):
// {
//      fieldName1: fieldValue1,
//      fieldName2: fieldValue2
// }
const initialState = {
    name: null,
    isLoading: false,
    fields: []
};

const getInitValue = (field) => {
    switch (field.type) {
        case 'checkbox':
            return false;
        case 'select':
            return isEmpty(field.options) ? '' : field.options[0].value;
        default:
            return '';
    }
};

const addExtraFieldProperties = (action) => {
    const {formName, fields} = action.payload;
    return fields.map(field => {
        const fieldId = `${formName}.${field.name}`;
        const initValue = getInitValue(field);
        return {...field, key: fieldId, id: fieldId, value: initValue};
    });
};


const form = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FIELDS_STARTED:
            return {...state, isLoading: true};
        case FETCH_FIELDS_SUCCESS:
            const {formName} = action.payload;
            return {isLoading: false, name: formName, fields: addExtraFieldProperties(action)};
        case FIELD_VALUE_CHANGED:
            const {fieldName, fieldValue} = action.payload;
            return {
                ...state,
                fields: state.fields
                    .map(field => (field.name === fieldName) ? {...field, value: fieldValue} : field)
            };
        default:
            return state;
    }
};


export default form;