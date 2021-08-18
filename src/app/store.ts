import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {employeeReducer} from './employee/employee.reducer';
import {officeReducer} from './office/office.reducer';
import {publisherReducer} from './publisher/publisher.reducer';

const rootReducer = combineReducers({
    employee: employeeReducer,
    office: officeReducer,
    publisher: publisherReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk));
