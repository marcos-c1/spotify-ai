import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaylists, fetchAlbuns, fetchTracks } from '../redux/reducers/userSlicer';
import { useEffect, useState } from 'react';

const UserInfo = () => {
    const dispatch = useDispatch();

    const token = useSelector((state) => state.token);
    const playlist = useSelector((state) => state.playlist);
    const album = useSelector((state) => state.album);
    const track = useSelector((state) => state.track);
    const prevTrack = useSelector((state) => state.prevTrack);

    const [trackData, setTrackData] = useState([track]);
    const [pagination, setPagination] = useState(50);
    const [hasClickedPrev, setClickedPrev] = useState(false);

    useEffect(() => {
        if (!playlist.hasData)
            dispatch(fetchPlaylists(token.data));
        if (!album.hasData)
            dispatch(fetchAlbuns(token.data));
        if (!track.hasData) {
            const payload = {
                token: token.data,
                nextURL: undefined
            }
            dispatch(fetchTracks(payload));
        }
    }, [dispatch])

    function toMinutes(duration_ms) {
        var minutes = Math.floor(duration_ms / 60000);
        var seconds = ((duration_ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    async function nextPage(nextURL) {
        dispatch({ type: 'prevTrack/addPrevTrack', payload: track.data })
        setPagination(pagination + 50);
        setTrackData([...trackData, track.data]);
        setClickedPrev(false);
        const payload = {
            token: token.data,
            nextURL: nextURL
        }
        await dispatch(fetchTracks(payload)).unwrap();
    }

    function prevPage() {
        if (prevTrack.length > 1) {
            dispatch({ type: 'prevTrack/removePrevTrack', payload: prevTrack.data[prevTrack.length - 1] })
        }
        setPagination(pagination - 50);
        setClickedPrev(true);
    }

    return (
        <main>
            <section className='container__user'>
                <Header />
                <div className="container__playlist">
                    <h2 style={{ textAlign: "left", marginLeft: "2em", marginTop: "1em" }}>Playlists</h2>
                    <div style={{ overflowY: "scroll" }}>
                        {playlist.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
                        {!playlist.loading && playlist.error ? <div style={{ textAlign: "center" }}>Error.. {playlist.error}</div> : null}
                        {!playlist.loading && playlist.hasData ?
                            (playlist.data.items.map((item, index) => {
                                return (
                                    item.tracks.total > 0 ?
                                        <a href={item.uri}>
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
                <div className="container__album">
                    <h2 style={{ textAlign: "left", marginLeft: "2em", marginTop: "1em" }}>Albums</h2>
                    <div style={{ overflowY: "scroll" }}>
                        {album.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
                        {!album.loading && album.error ? <div style={{ textAlign: "center" }}>Error.. {album.error}</div> : null}
                        {!album.loading && album.hasData ?
                            (album.data.items.map((item) => {
                                return (
                                    <a href={item.album.uri}>
                                        <ul className='album__card' id="album">
                                            <div className='flex__column'>
                                                <div className='flex__row'>
                                                    <li id="album__image__item"><img id="album__image" src={item.album.images[0].url}></img></li>
                                                    <div className='flex__column'>
                                                        <li id="album__item">{item.album.name}</li>
                                                        <li id="album__item">{item.album.artists[0].name}</li>
                                                        <li id="album__item">Popularity: {item.album.popularity}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            <li id="playlist__total">{item.album.tracks.total} songs</li>
                                        </ul></a>
                                )
                            })
                            ) : null}
                    </div>
                </div>
            </section>
            <section className="container__table">
                <div style={{ overflowY: "scroll" }}>
                    <h2 style={{ textAlign: "left", marginLeft: "1.1em", paddingTop: "1em", paddingBottom: "0.5em" }}>Tracks</h2>
                    {track.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
                    {!track.loading && track.error ? <div style={{ textAlign: "center" }}>Error.. {track.error}</div> : null}
                    {!track.loading && track.hasData && !hasClickedPrev ?
                        <table id="table">
                            <thead id="table__head">
                                <tr>
                                    <td>Artist</td>
                                    <td>Song name</td>
                                    <td>Popularity</td>
                                    <td>Duration</td>
                                    <td>Is local?</td>
                                </tr>
                            </thead>
                            {track.data.items.map((item) => {
                                return (
                                    <tbody id="table__body">
                                        <tr id="table__row">
                                            <td id="table__data">{item.track.artists[0].name}</td>
                                            <td id="table__item">{item.track.name}</td>
                                            <td id="table__item">{item.track.popularity}</td>
                                            <td id="table__item">{toMinutes(item.track.duration_ms)}</td>
                                            <td id="table__item">{item.track.is_local ? "true" : "false"}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                            }
                        </table> : prevTrack.length > 0 && <table id="table">
                            <thead id="table__head">
                                <tr>
                                    <td>Artist</td>
                                    <td>Song name</td>
                                    <td>Popularity</td>
                                    <td>Duration</td>
                                    <td>Is local?</td>
                                </tr>
                            </thead>
                            {prevTrack.data[prevTrack.length - 1].items.map((item) => {
                                return (
                                    <tbody id="table__body">
                                        <tr id="table__row">
                                            <td id="table__data">{item.track.artists[0].name}</td>
                                            <td id="table__item">{item.track.name}</td>
                                            <td id="table__item">{item.track.popularity}</td>
                                            <td id="table__item">{toMinutes(item.track.duration_ms)}</td>
                                            <td id="table__item">{item.track.is_local ? "true" : "false"}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                            }
                        </table>}
                </div>
                {!track.loading && track.hasData ? (
                    <ul id="last__row">
                        <span style={{ paddingRight: "1em" }}>Row pagination</span>
                        {pagination <= 50 ? null : (
                            <button id="btnArrow" onClick={prevPage}>
                                <i className="arrow left"></i>
                            </button>
                        )}
                        <button id="btnArrow" onClick={() => nextPage(track.data.next)}>
                            <i className="arrow right"></i>
                        </button>
                    </ul>
                ) : null}
            </section>
        </main >

    )
}

export default UserInfo