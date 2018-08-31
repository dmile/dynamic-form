import apiMock from '../api/mock'

export const FETCH_FIELDS_STARTED = 'FETCH_FIELDS_STARTED';
export const FETCH_FIELDS_SUCCESS = 'FETCH_FIELDS_SUCCESS';
export const FIELD_VALUE_CHANGED = 'FIELD_VALUE_CHANGED';

const fetchFieldsStarted = (formName) => {
    return {
        type: FETCH_FIELDS_STARTED,
        payload: {
            formName
        }
    }
};

const fetchFieldsSuccess = (formName, fields) => {
    return {
        type: FETCH_FIELDS_SUCCESS,
        payload: {
            formName,
            fields
        }
    }
};

export const fetchFields = (formName) => (dispatch) => {
    dispatch(fetchFieldsStarted(formName));
    apiMock.fetchFields()
        .then(fields => dispatch(fetchFieldsSuccess(formName, fields)));
};

export const fieldValueChanged = (formName, fieldName, fieldValue) => {
    return {
        type: FIELD_VALUE_CHANGED,
        payload: {
            formName,
            fieldName,
            fieldValue
        }
    }
};