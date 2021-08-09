import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from '../employee-list/employeesSlice';

export default configureStore({
    reducer: {
        employees: employeesReducer
    }
});
