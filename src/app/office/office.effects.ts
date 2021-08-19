import {OFFICE_ACTIONS_TYPES, OfficeAction} from './office.actions';

export const fetchOffices = async (dispatch: (action: OfficeAction) => void) => {
    try {
        dispatch({type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_PENDING_STATE, payload: true});
        const officesJson = await fetch('https://yoc-media.github.io/weather/api/offices.json');
        const offices = await officesJson.json();
        dispatch({type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_PENDING_STATE, payload: false});
        dispatch({type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_SUCCESS, payload: offices});
    } catch (e) {
        dispatch({type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_PENDING_STATE, payload: false});
        dispatch({type: OFFICE_ACTIONS_TYPES.OFFICE_FETCH_ERROR, payload: e});
    }
}
