import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userAPI from '../../api/fetch';

const initialState = {
    data: {},
    loading: false,
    error: '',
    hasData: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = { ...state.data, ...action.payload };
                state.hasData = true;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.data = {};
                state.loading = false;
                state.error = action.error.message
                state.hasData = false;
            })
    }
})

export const fetchUser = createAsyncThunk('user/fetchUser', async (token) => {
    const data = await userAPI.fetchProfile(token);
    return data;
})

export default userSlice.reducer