import {OFFICE_ACTIONS_TYPES, OfficeAction} from './office.actions';

// TODO - add errors handling
export const fetchOffices = async (dispatch: (action: OfficeAction) => void) => {
    const officesJson = await fetch('https://yoc-media.github.io/weather/api/offices.json');
    const offices = await officesJson.json();
    // const offices = [
    //     {
    //         "id": 1,
    //         "name": "Berlin"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Düsseldorf"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Vienna"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Warsaw"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Madrid"
    //     },
    //     {
    //         "id": 6,
    //         "name": "London"
    //     },
    //     {
    //         "id": 7,
    //         "name": "Amsterdam"
    //     }
    // ];
    dispatch({type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_SUCCESS, payload: offices});
}
