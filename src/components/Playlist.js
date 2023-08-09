import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaylists } from '../redux/reducers/userSlicer';

const Playlist = () => {
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlist);
    const token = useSelector((state) => state.token);

    useEffect(() => {
        if (!playlist.hasData)
            dispatch(fetchPlaylists(token.data));
    }, [dispatch]);

    return (
        <div className="container__playlist">
            <h2 style={{ textAlign: "left", marginLeft: "2em", marginTop: "1em" }}>Playlists</h2>
            <div style={{ overflowY: "scroll" }} id="playlist__scrollbar__transparent">
                {playlist.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
                {!playlist.loading && playlist.error ? <div style={{ textAlign: "center" }}>Error.. {playlist.error}</div> : null}
                {!playlist.loading && playlist.hasData ?
                    (playlist.data.items.map((item, index) => {
                        return (
                            item.tracks.total > 0 ?
                                <a href={item.uri} key={index}>
                                    <ul className='playlist__card' id="playlist">
                                        <div className='flex__column'>
                                            <li id="playlist__item">{index + 1}. {item.name}</li>
                                        </div>
                                        <li id="playlist__total">{item.tracks.total} songs</li>
                                    </ul></a> : null
                        )
                    })
                    ) : null}
            </div>

        </div>
    )
}

export default Playlist