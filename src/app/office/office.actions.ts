import {IOffice} from './interfaces';

export enum OFFICE_ACTIONS_TYPES {
    OFFICE_FETCH_SUCCESS = '[Office] fetch offices success',
    OFFICE_FETCH_ERROR = '[Office] fetch offices error',
    OFFICE_FETCH_PENDING_STATE = '[Office] fetch offices pending state'
}

export interface IFetchOfficesSuccessAction {
    type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_SUCCESS,
    payload: IOffice[]
}
export interface IFetchOfficesErrorAction {
    type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_ERROR,
    payload: unknown;
}
export interface IFetchOfficesPendingStateAction {
    type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_PENDING_STATE,
    payload: boolean;
}

export type OfficeAction = IFetchOfficesSuccessAction
    | IFetchOfficesErrorAction
    | IFetchOfficesPendingStateAction;
