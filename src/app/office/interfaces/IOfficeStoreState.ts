import {IOffice} from './IOffice';

export interface IOfficeStoreState {
    data: IOffice[];
    isPending: boolean;
    error: string | null;
}
