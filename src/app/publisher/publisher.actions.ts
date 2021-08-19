import { IPublisher } from "./interfaces";

export enum PUBLISHER_ACTIONS_TYPES {
    PUBLISHER_FETCH_SUCCESS = '[Publisher] fetch publishers success',
    PUBLISHER_FETCH_ERROR = '[Publisher] fetch publishers error',
    PUBLISHER_FETCH_PENDING_STATE = '[Publisher] fetch publishers pending state'
}

export interface IFetchPublishersSuccessAction {
    type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_SUCCESS,
    payload: IPublisher[]
}
export interface IFetchPublishersErrorAction {
    type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_ERROR,
    payload: unknown;
}
export interface IFetchPublishersPendingStateAction {
    type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_PENDING_STATE,
    payload: boolean;
}

export type PublisherAction = IFetchPublishersSuccessAction
    | IFetchPublishersErrorAction
    | IFetchPublishersPendingStateAction;
