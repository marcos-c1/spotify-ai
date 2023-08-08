import { configureStore } from '@reduxjs/toolkit'
import { userSlice, playlistSlice, albumSlicer, trackSlicer, prevTrackSlicer } from '../reducers/userSlicer';
import { tokenSlice } from '../reducers/tokenSlicer';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        playlist: playlistSlice.reducer,
        album: albumSlicer.reducer,
        track: trackSlicer.reducer,
        token: tokenSlice.reducer,
        prevTrack: prevTrackSlicer.reducer
    }
})