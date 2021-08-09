import {createSlice} from '@reduxjs/toolkit';
import {IEmployee} from './interfaces/IEmployee';


const firstOffice = {id: 1, name: 'Berlin Office'};
const secondOffice = {id: 2, name: 'Moscow Office'};

const initialState: IEmployee[] = [
    {id: 1, first_name: 'John', last_name: 'Doe', office: firstOffice},
    {id: 2, first_name: 'Max', last_name: 'Mustermann', office: secondOffice}
];

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {}
});

export default employeesSlice.reducer;
