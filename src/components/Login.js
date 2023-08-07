import api from '../api/user'
import auth, { getAccessToken } from '../utils/auth'
import { fetchUser } from '../redux/reducers/userSlicer';
import { getToken } from '../redux/reducers/tokenSlicer';
import { useSelector, useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import Header from './Header';

const Login = () => {
    const dispatch = useDispatch()
    const [hasToken, setHasToken] = useState(false);
    const token = useSelector((state) => state.token);
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
            if (token.data) {
                await dispatch(fetchUser(token.data)).unwrap();
            } else {
                const payload = { clientId, code }
                await dispatch(getToken(payload)).unwrap();
                setHasToken(true);
            }
        }
    }

    return (
        <div className=''>
            {user.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
            {!user.loading && user.error ? <div style={{ textAlign: "center" }}>Error.. {user.error}</div> : null}
            {!user.loading && user.hasData ? (
                <Header user={user.data} />
            ) : token.data ? (
                <div className="container__login bg_black">
                    <div className="justify__center container__login__full">
                        <h2 className="title">Spotify API</h2>
                        <button id="btnLogin" onClick={retrieveProfile}>Generate Access Token</button>
                    </div>
                </div>
            ) : (
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
        </div>
    )
}

export default Login