import {IEmployee} from './interfaces';

export enum EMPLOYEE_ACTIONS_TYPES {
    EMPLOYEE_ADD = '[Employee] add employee',
    EMPLOYEE_UPDATE = '[Employee] update employee',
    EMPLOYEE_REMOVE = '[Employee] remove employee',
    EMPLOYEE_FETCH_SUCCESS = '[Emplooyee] fetch employees success',
    EMPLOYEE_FETCH_ERROR = '[Emplooyee] fetch employees error',
    EMPLOYEE_FETCH_PENDING_STATE = '[Employee] fetch employees pending state'
}

export interface IAddEmployeeAction {
    type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_ADD;
    payload: IEmployee;
}
export interface IUpdateEmployeeAction {
    type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_UPDATE;
    payload: IEmployee;
}
export interface IRemoveEmployeeAction {
    type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_REMOVE;
    payload: number;
}
export interface IFetchEmployeesSuccessAction {
    type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_SUCCESS,
    payload: IEmployee[]
}
export interface IFetchEmployeesErrorAction {
    type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_ERROR,
    payload: unknown;
}
export interface IFetchEmployeesPengingStateAction {
    type: EMPLOYEE_ACTIONS_TYPES.EMPLOYEE_FETCH_PENDING_STATE,
    payload: boolean;
}

export type EmployeeAction = IAddEmployeeAction
    | IUpdateEmployeeAction
    | IRemoveEmployeeAction
    | IFetchEmployeesSuccessAction
    | IFetchEmployeesErrorAction
    | IFetchEmployeesPengingStateAction;
