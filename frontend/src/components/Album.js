import { useSelector, useDispatch } from 'react-redux';
import { fetchAlbuns } from '../redux/reducers/userSlicer';
import { useEffect } from 'react';

const Album = () => {
    const dispatch = useDispatch();
    const album = useSelector((state) => state.album);
    const token = useSelector((state) => state.token);

    useEffect(() => {
        if (!album.hasData)
            dispatch(fetchAlbuns(token.data));
    }, [dispatch]);

    return (
        <div className="container__album">
            <h2 style={{ textAlign: "left", marginLeft: "2em", marginTop: "1em" }}>Albums</h2>
            <div style={{ overflowY: "scroll" }} id="album__scrollbar__transparent">
                {album.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
                {!album.loading && album.error ? <div style={{ textAlign: "center" }}>Error.. {album.error}</div> : null}
                {!album.loading && album.hasData ?
                    (album.data.items.map((item, index) => {
                        return (
                            <a key={index} href={item.album.uri}>
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
    )
}

export default Album