import {IOffice} from './IOffice';
import {IPublisher} from './IPublisher';

export interface IEmployee {
    id: number;
    first_name: string;
    last_name: string;
    office: IOffice;
    publisher?: IPublisher;
}
