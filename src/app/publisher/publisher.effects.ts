import {PUBLISHER_ACTIONS_TYPES, PublisherAction} from './publisher.actions';

// TODO - add errors handling
export const fetchPublishers = async (dispatch: (action: PublisherAction) => void) => {
    const publishersJson = await fetch('https://yoc-media.github.io/weather/api/publishers.json');
    const publishers = await publishersJson.json();
    // const publishers = [
    //     {
    //         "id": 1,
    //         "name": "DE Publisher"
    //     },
    //     {
    //         "id": 2,
    //         "name": "AT Publisher"
    //     },
    //     {
    //         "id": 3,
    //         "name": "PL Publisher"
    //     },
    //     {
    //         "id": 4,
    //         "name": "ES Publisher"
    //     },
    //     {
    //         "id": 5,
    //         "name": "UK Publisher"
    //     },
    //     {
    //         "id": 6,
    //         "name": "NL Publisher"
    //     }
    // ]
    dispatch({type: PUBLISHER_ACTIONS_TYPES.PUBLISHER_FETCH_SUCCESS, payload: publishers});
}
