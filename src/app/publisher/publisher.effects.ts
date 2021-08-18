import {PUBLISHER_ACTIONS_TYPES, PublisherAction} from './publisher.actions';

// TODO - add errors handling
export const fetchPublishers = async (dispatch: (action: PublisherAction) => void) => {
    const publishersJson = await fetch('https://yoc-media.github.io/weather/api/publishers.json');
    const publishers = await publishersJson.json();
    dispatch({type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_SUCCESS, payload: publishers});
}
