import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/reducers/userSlicer';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);

    useEffect(() => {
        dispatch(fetchUser(token.data)).unwrap();
    }, [dispatch])

    return (
        !user.loading && user.data ? (
            <div className='display__user'>
                <ul className="header__list">
                    <li><img id="profile__pic" alt={user.data.id} src={user.data.images[1].url}></img></li>
                    <div id="resume__info">
                        <li>{user.data.display_name}</li>
                        <li>{user.data.country}</li>
                    </div>
                    <button id="btnGeneratePlaylist">Generate playlist</button>
                </ul>
            </div>
        ) : null
    )
}

export default Header