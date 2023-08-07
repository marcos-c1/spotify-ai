import { configureStore } from '@reduxjs/toolkit'
import { userSlice, playlistSlice } from '../reducers/userSlicer';
import { tokenSlice } from '../reducers/tokenSlicer';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        playlist: playlistSlice.reducer,
        token: tokenSlice.reducer
    }
})