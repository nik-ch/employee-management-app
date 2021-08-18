import {OFFICE_ACTIONS_TYPES, OfficeAction} from './office.actions';

// TODO - add errors handling
export const fetchOffices = async (dispatch: (action: OfficeAction) => void) => {
    const officesJson = await fetch('https://yoc-media.github.io/weather/api/offices.json');
    const offices = await officesJson.json();
    dispatch({type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_SUCCESS, payload: offices});
}
