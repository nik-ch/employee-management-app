import {EMPLOYEE_ACTIONS_TYPES, EmployeeAction} from './employee.actions';

// TODO - add errors handling
export const fetchEmployees = async (dispatch: (action: EmployeeAction) => void) => {
    const employeesJson = await fetch('https://yoc-media.github.io/weather/api/users.json');
    const employees = await employeesJson.json();
    // const employees: any = [
    //     {
    //         "id": 1,
    //         "first_name": "John",
    //         "last_name": "Doe",
    //         "office": {
    //             "id": 3,
    //             "name": "Vienna"
    //         },
    //         "publisher": null
    //     },
    //     {
    //         "id": 2,
    //         "first_name": "Max",
    //         "last_name": "Mustermann",
    //         "office": {
    //             "id": 4,
    //             "name": "Warsaw"
    //         },
    //         "publisher": null
    //     },
    //     {
    //         "id": 3,
    //         "first_name": "Jane",
    //         "last_name": "Doe",
    //         "office": {
    //             "id": 5,
    //             "name": "Madrid"
    //         },
    //         "publisher": {
    //             "id": 4,
    //             "name": "ES Publisher"
    //         }
    //     },
    //     {
    //         "id": 4,
    //         "first_name": "Erika",
    //         "last_name": "Mustermann",
    //         "office": {
    //             "id": 3,
    //             "name": "Vienna"
    //         },
    //         "publisher": {
    //             "id": 4,
    //             "name": "AT Publisher"
    //         }
    //     }
    // ];
    dispatch({type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_SUCCESS, payload: employees});
}
