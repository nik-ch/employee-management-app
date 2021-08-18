import {EmployeeAction, EMPLOYEE_ACTIONS_TYPES} from './employee.actions';
import {IEmployee, IEmployeeStoreState} from './interfaces';

const initialState: IEmployeeStoreState = {
    data: new Map<number, IEmployee>(),
    isPending: false,
    error: null
}

const createMap = (map: Map<number, IEmployee>): Map<number, IEmployee> => {
    const newMap = new Map();
    for (let e of map.values()) {
        newMap.set(e.id, e);
    }
    return newMap;
}

export const employeeReducer = (state= initialState, action: EmployeeAction): IEmployeeStoreState => {
    switch (action.type) {
        case EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_ADD:
        case EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_UPDATE: {
            const {data} = state;
            const newEmployee = action.payload;
            const employees = createMap(data);
            employees.set(newEmployee.id, newEmployee);
            return {
                data: employees,
                isPending: false,
                error: null
            };
        }
        case EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_REMOVE: {
            const {data} = state;
            const id = action.payload;
            const employees = createMap(data);
            employees.delete(id);
            return {
                data: employees,
                isPending: false,
                error: null
            };
        }
        case EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_PENDING_STATE: {
            return {
                ...state,
                isPending: action.payload
            };
        }
        case EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_SUCCESS: {
            const loadedEmployees = action.payload;
            const employees = new Map<number, IEmployee>();
            loadedEmployees.forEach(e => employees.set(e.id, e));
            return {
                data: employees,
                error: null,
                isPending: false
            };
        }
        case EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_ERROR: {
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        }
        default: return state;
    }
}
