import api from '../api/user'
import auth from '../utils/auth'
import { fetchUser } from '../redux/reducers/userSlicer';
import { useSelector, useDispatch } from 'react-redux';
import { useContext, useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const Login = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    const userStatus = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error);

    const [login, setLogin] = useContext(LoginContext);


    async function retrieveProfile() {
        const clientId = process.env.REACT_APP_CLIENT_ID || "a2d5d1842e384a0ea7ff7d2249153639"
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) {
            auth.redirectToAuthCodeFlow(clientId);
        } else {
            const accessToken = await auth.getAccessToken(clientId, code);
            await dispatch(fetchUser(accessToken)).unwrap();
        }
    }

    return (
        <div className=''>
            {!user.loading && user.hasData ? null : (
                <div className="container__login">
                    <div className="justify__center container__login__left">
                        <h2 className="title">Spotify API</h2>
                        <button id="btnLogin" onClick={retrieveProfile}>Authorize Spotify API</button>
                    </div>
                    <div className="align__center container__login__right typewriter">
                        <p className='paragraph'>
                            A playlist autogenerator using artificial intelligence to train the model based on what the user listens to on a daily basis.
                        </p>
                    </div>
                </div>
            )}
            {user.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
            {!user.loading && user.error ? <div>Error.. {user.error}</div> : null}
            {!user.loading && user.hasData ? (
                <div className='display__user'>
                    <ul>
                        <li><img id="profile__pic" src={user.data.images[1].url}></img></li>
                        <li>{user.data.id}</li>
                        <li>{user.data.display_name}</li>
                        <li>{user.data.href}</li>
                        <li>{user.data.country}</li>
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default Login