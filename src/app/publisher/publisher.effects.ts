import {PUBLISHER_ACTIONS_TYPES, PublisherAction} from './publisher.actions';

export const fetchPublishers = async (dispatch: (action: PublisherAction) => void) => {
    try {
        dispatch({type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_PENDING_STATE, payload: true});
        const publishersJson = await fetch('https://yoc-media.github.io/weather/api/publishers.json');
        const publishers = await publishersJson.json();
        dispatch({type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_PENDING_STATE, payload: false});
        dispatch({type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_SUCCESS, payload: publishers});
    } catch (e) {
        dispatch({type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_PENDING_STATE, payload: false});
        dispatch({type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_ERROR, payload: e});
    }
}
