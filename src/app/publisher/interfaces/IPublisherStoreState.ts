import { IPublisher } from "./IPublisher";

export interface IPublisherStoreState {
    data: IPublisher[];
    error: string | null;
    isPending: boolean;
}
