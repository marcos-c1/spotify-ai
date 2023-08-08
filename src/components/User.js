import Header from './Header';
import Playlist from './Playlist';
import Album from './Album';
import Track from './Track';

const UserInfo = () => {

    return (
        <main className='container__user'>
            <Header />

            <section className='container__grid'>
                <Playlist />
                <Album />
            </section>

            <section className="container__table">
                <Track />
            </section>
        </main>
    )
}

export default UserInfo