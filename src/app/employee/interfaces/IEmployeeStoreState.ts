import {IEmployee} from './IEmployee';

export interface IEmployeeStoreState {
    data: Map<number, IEmployee>;
    isPending: boolean;
    error: string | null;
}
