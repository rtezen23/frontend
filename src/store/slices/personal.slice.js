import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const personalSlice = createSlice({
	name: 'personal',
    initialState: {},
    reducers: {
        setPersonal: (state, action) => action.payload
    }
})

export const { setPersonal } = personalSlice.actions;

export default personalSlice.reducer;