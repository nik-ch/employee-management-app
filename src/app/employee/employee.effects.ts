import {EMPLOYEE_ACTIONS_TYPES, EmployeeAction} from './employee.actions';

export const fetchEmployees = async (dispatch: (action: EmployeeAction) => void) => {
    // try {
    //     dispatch({type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_PENDING_STATE, payload: true});
    //     const employeesJson = await fetch('https://yoc-media.github.io/weather/api/users.json');
    //     const employees = await employeesJson.json();
    //     dispatch({type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_PENDING_STATE, payload: false});
    //     dispatch({type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_SUCCESS, payload: employees});
    // } catch (e) {
    //     dispatch({type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_PENDING_STATE, payload: false});
    //     dispatch({type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_ERROR, payload: e});
    // }


    // using mocked data here, because link above contains error:
    // user with 'id' 4 contains link to the publisher with 'id' 4, but shows publisher name of entity with 'id' 2
    // TL;DR: publisher for Erika Mustermann should be {id: 2, name: 'AT publisher'}
    const employees: any = [
        {
            "id": 1,
            "first_name": "John",
            "last_name": "Doe",
            "office": {
                "id": 3,
                "name": "Vienna"
            },
            "publisher": null
        },
        {
            "id": 2,
            "first_name": "Max",
            "last_name": "Mustermann",
            "office": {
                "id": 4,
                "name": "Warsaw"
            },
            "publisher": null
        },
        {
            "id": 3,
            "first_name": "Jane",
            "last_name": "Doe",
            "office": {
                "id": 5,
                "name": "Madrid"
            },
            "publisher": {
                "id": 4,
                "name": "ES Publisher"
            }
        },
        {
            "id": 4,
            "first_name": "Erika",
            "last_name": "Mustermann",
            "office": {
                "id": 3,
                "name": "Vienna"
            },
            "publisher": {
                "id": 2,
                "name": "AT Publisher"
            }
        }
    ];
    dispatch({type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_SUCCESS, payload: employees});
}
