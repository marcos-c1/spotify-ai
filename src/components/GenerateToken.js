import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/reducers/userSlicer';
import { Link } from 'react-router-dom';
import { getToken } from '../redux/reducers/tokenSlicer';

const GenerateToken = ({ props }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);

    useEffect(() => {
        const clientId = process.env.REACT_APP_CLIENT_ID || "a2d5d1842e384a0ea7ff7d2249153639"
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        const payload = { clientId, code }
        dispatch(getToken(payload)).unwrap();
    }, [dispatch])

    async function getUserProfileInfo() {
        await dispatch(fetchUser(token.data)).unwrap();
    }

    return (
        <div className="container__login bg_black">
            <div className="justify__center container__login__full">
                <h2 className="title">Spotify API</h2>
                {token.data ? (
                    <Link to='/user'><button id="btnLogin" onClick={getUserProfileInfo}>Access your profile</button></Link>
                ) : (<button id="btnLogin">{token.data}</button>)}
            </div>
        </div>
    )
}

export default GenerateToken