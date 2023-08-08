import { configureStore } from '@reduxjs/toolkit'
import { userSlice, playlistSlice, albumSlicer } from '../reducers/userSlicer';
import { tokenSlice } from '../reducers/tokenSlicer';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        playlist: playlistSlice.reducer,
        album: albumSlicer.reducer,
        token: tokenSlice.reducer
    }
})