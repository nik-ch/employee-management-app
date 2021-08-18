import {IPublisherStoreState} from './interfaces';
import {PUBLISHER_ACTIONS_TYPES, PublisherAction} from './publisher.actions';

const initialState: IPublisherStoreState = {
    isPending: false,
    error: null,
    data: []
};

export const publisherReducer = (state = initialState, action: PublisherAction): IPublisherStoreState => {
    switch (action.type) {
        case PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_SUCCESS: {
            return {
                error: null,
                isPending: false,
                data: action.payload
            };
        }
        case PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_ERROR: {
            return {
                ...state,
                isPending: false,
                error: action.payload
            };
        }
        case PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_PENDING_STATE: {
            return {
                ...state,
                isPending: action.payload
            };
        }
        default: return state;
    }
}
