import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeFetchReducer from './EmployeeFetchReducer';

export default combineReducers({
    auth:AuthReducer,
    employeeForm:EmployeeFormReducer,
    employees:EmployeeFetchReducer
});