import {IOffice} from '../../office/interfaces';
import {IPublisher} from '../../publisher/interfaces';

export interface IEmployee {
    id: number;
    first_name: string;
    last_name: string;
    office: IOffice;
    publisher?: IPublisher;
}
