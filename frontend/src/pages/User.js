import Header from '../components/Header';
import Playlist from '../components/Playlist';
import Album from '../components/Album';
import Track from '../components/Track';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../redux/reducers/tokenSlicer';
import { LoginContext } from '../contexts/LoginContext';

const UserInfo = () => {
    const dispatch = useDispatch();

    const [login, setLogin] = useContext(LoginContext);
    const token = useSelector((state) => state.token);

    useEffect(() => {
        if (!token.hasData) {
            dispatch(getToken(login)).unwrap();
        }
    }, [dispatch]);

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            <main className='container__user'>
                <Header hasGenerateBtn={true} />
                <Hero />

                <section className='container__grid'>
                    <Playlist />
                    <Album />
                </section>

                <section className="container__table">
                    <Track />
                </section>

                <Footer />
            </main>
        </LoginContext.Provider>
    )
}

export default UserInfo