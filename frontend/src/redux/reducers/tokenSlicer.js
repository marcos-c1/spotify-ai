import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import auth from '../../utils/auth';

const initialState = {
    data: "",
    loading: false,
    error: '',
    hasData: false,
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getToken.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.concat(action.payload);
                state.hasData = true;
            })
            .addCase(getToken.rejected, (state, action) => {
                state.data = "";
                state.loading = false;
                state.error = action.error.message
                state.hasData = false;
            })
    }
})

export const getToken = createAsyncThunk('token/getAccessToken', async (payload) => {
    const data = await auth.getAccessToken(payload.clientId, payload.code);
    return data;
})
