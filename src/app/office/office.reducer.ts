import {IOfficeStoreState} from './interfaces';
import {OFFICE_ACTIONS_TYPES, OfficeAction} from './office.actions';

const initialState = {
    isPending: false,
    data: [],
    error: null
};

export const officeReducer = (state: IOfficeStoreState = initialState, action: OfficeAction): IOfficeStoreState => {
    switch (action.type) {
        case OFFICE_ACTIONS_TYPES.OFFICE_FETCH_SUCCESS: {
            return {
                error: null,
                isPending: false,
                data: action.payload
            };
        }
        case OFFICE_ACTIONS_TYPES.OFFICE_FETCH_ERROR: {
            return {
                ...state,
                isPending: false,
                error: 'An error occurred while loading offices data'
            };
        }
        case OFFICE_ACTIONS_TYPES.OFFICE_FETCH_PENDING_STATE: {
            return {
                ...state,
                isPending: action.payload
            };
        }
        default: return state;
    }
}
