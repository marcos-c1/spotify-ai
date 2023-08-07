import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaylists } from '../redux/reducers/userSlicer';

const Header = ({ user }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const playlist = useSelector((state) => state.playlist);
    const playlistStatus = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error);

    useEffect(() => {
        dispatch(fetchPlaylists(token.data))
    }, [dispatch])

    return (
        <div className='display__user'>
            <ul className="header__list">
                <li><img id="profile__pic" alt={user.id} src={user.images[1].url}></img></li>
                <div id="resume__info">
                    <li>{user.display_name}</li>
                    <li>{user.country}</li>
                </div>
            </ul>
            {user.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
            {!user.loading && user.error ? <div style={{ textAlign: "center" }}>Error.. {user.error}</div> : null}
            {!user.loading && user.hasData ? (
                <div>

                </div>
            ) : null}
        </div>
    )
}

export default Header