import { useSelector, useDispatch } from 'react-redux';
import { fetchTracks } from '../redux/reducers/userSlicer';
import { useEffect, useState } from 'react';

const Track = () => {
    const dispatch = useDispatch();

    const token = useSelector((state) => state.token);
    const track = useSelector((state) => state.track);
    const prevTrack = useSelector((state) => state.prevTrack);

    const [trackData, setTrackData] = useState([track]);
    const [pagination, setPagination] = useState(50);
    const [hasClickedPrev, setClickedPrev] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
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
        setPage(page + 1)
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
        setPage(page - 1)
        if (prevTrack.length > 1) {
            dispatch({ type: 'prevTrack/removePrevTrack', payload: prevTrack.data[prevTrack.length - 1] })
        }
        setPagination(pagination - 50);
        setClickedPrev(true);
    }

    return (
        <div className="container__track">
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
                                    <td id="table__item">{item.track.artists[0].name}</td>
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
            {
                token.hasData ? (
                    <ul id="last__row">
                        <span style={{ paddingRight: "1em", color: "var(--spotify-color)" }}>Page {page}</span>
                        {pagination <= 50 ? null : (
                            <button id="btnArrow" onClick={prevPage}>
                                <i className="arrow left"></i>
                            </button>
                        )}
                        <button id="btnArrow" onClick={() => nextPage(track.data.next)}>
                            <i className="arrow right"></i>
                        </button>
                    </ul>
                ) : null
            }
        </div>

    )
}

export default Track