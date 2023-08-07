import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../reducers/userSlicer';

export default configureStore({
    reducer: {
        user: userSlice
    }
})