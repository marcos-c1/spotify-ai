import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userAPI from '../../api/user';

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

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPlaylists.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
            })
            .addCase(fetchPlaylists.fulfilled, (state, action) => {
                state.loading = false;
                state.data = { ...state.data, ...action.payload };
                state.hasData = true;
            })
            .addCase(fetchPlaylists.rejected, (state, action) => {
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

export const fetchPlaylists = createAsyncThunk('user/fetchPlaylists', async (token) => {
    const data = await userAPI.getPlaylists(token);
    return data;
})