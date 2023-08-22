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

export const albumSlicer = createSlice({
    name: 'album',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAlbuns.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
            })
            .addCase(fetchAlbuns.fulfilled, (state, action) => {
                state.loading = false;
                state.data = { ...state.data, ...action.payload };
                state.hasData = true;
            })
            .addCase(fetchAlbuns.rejected, (state, action) => {
                state.data = {};
                state.loading = false;
                state.error = action.error.message
                state.hasData = false;
            })
    }
})

export const trackSlicer = createSlice({
    name: 'track',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTracks.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
            })
            .addCase(fetchTracks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = { ...action.payload };
                state.hasData = true;
            })
            .addCase(fetchTracks.rejected, (state, action) => {
                state.data = {};
                state.loading = false;
                state.error = action.error.message
                state.hasData = false;
            })
    }
})

export const prevTrackSlicer = createSlice({
    name: 'prevTrack',
    initialState: { data: [], length: 0 },
    reducers: {
        addPrevTrack(state, action) {
            switch (action.type) {
                case 'prevTrack/addPrevTrack': {
                    return {
                        ...state,
                        data: [
                            ...state.data, action.payload
                        ],
                        length: state.length + 1
                    }
                }
            }
        },
        removePrevTrack(state, action) {
            switch (action.type) {
                case 'prevTrack/removePrevTrack': {
                    return {
                        ...state,
                        data: [
                            ...state.data.filter((item) => item.href != action.payload.href)
                        ],
                        length: state.length - 1
                    }
                }

            }
        }
    },
})

const initialStateArtist = {
    data: [],
    loading: false,
    id: [],
    length: 0,
    error: '',
    hasData: false,
    saveToFile: false
}

export const artistSlicer = createSlice({
    name: 'artist',
    initialState: initialStateArtist,
    reducers: {
        addID(state, action) {
            if (action.type == 'artist/addID') {
                return {
                    ...state,
                    id: [
                        ...action.payload
                    ],
                    length: state.length + 1
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArtists.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
            })
            .addCase(fetchArtists.fulfilled, (state, action) => {
                state.loading = false;
                state.data = [...state.data, action.payload]
                state.hasData = true;
            })
            .addCase(fetchArtists.rejected, (state, action) => {
                state.data = {};
                state.loading = false;
                state.error = action.error.message
                state.hasData = false;
            })
            .addCase(postArtist.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
            })
            .addCase(postArtist.fulfilled, (state, action) => {
                state.loading = false;
                state.hasData = true;
            })
            .addCase(postArtist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
                state.hasData = false;
            })
            .addCase(saveArtistToFile.pending, (state, action) => {
                state.loading = true;
                state.hasData = false;
                state.saveToFile = false;
            })
            .addCase(saveArtistToFile.fulfilled, (state, action) => {
                state.loading = false;
                state.hasData = true;
                state.saveToFile = true;
            })
            .addCase(saveArtistToFile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
                state.hasData = false;
                state.saveToFile = false;
            })
    }
})

export const fetchUser = createAsyncThunk('user/fetchUser', async (token) => {
    const data = await userAPI.fetchProfile(token).then((r) => r.data);
    return data;
})

export const fetchPlaylists = createAsyncThunk('user/fetchPlaylists', async (token) => {
    const data = await userAPI.getPlaylists(token).then((r) => r.data);
    return data;
})

export const fetchAlbuns = createAsyncThunk('user/fetchAlbuns', async (token) => {
    const data = await userAPI.getAlbums(token).then((r) => r.data);
    return data;
})

export const fetchTracks = createAsyncThunk('user/fetchTracks', async ({ token, nextURL = undefined }) => {
    const data = await userAPI.getTracks(token, nextURL).then((r) => r.data);
    return data;
})

export const fetchArtists = createAsyncThunk('user/fetchArtists', async ({ token, artistsID }) => {
    const data = await userAPI.getArtists(token, artistsID).then((r) => r.data);
    return data;
})

export const postArtist = createAsyncThunk('user/postUser', async (artist) => {
    const data = await userAPI.saveArtist(artist.external_urls, artist.followers, artist.genres, artist.href, artist.id, artist.images, artist.name, artist.popularity, artist.type, artist.uri)
    return data;
})

export const saveArtistToFile = createAsyncThunk('user/saveToFile', async (artists) => {
    const result = await userAPI.saveArtistToFile(JSON.stringify(artists));
    console.log(result);
    return result;
})
