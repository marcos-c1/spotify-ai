import Header from './Header';
import Playlist from './Playlist';
import Album from './Album';
import Track from './Track';
import Artist from './Artist';
import Hero from './Hero';

const UserInfo = () => {

    return (
        <main className='container__user'>
            <Header />
            <Hero />

            <section className='container__grid'>
                <Playlist />
                <Album />
            </section>

            <section className="container__table">
                <Track />
            </section>

            <section className='container__grid'>
                <Artist />
            </section>
        </main>
    )
}

export default UserInfo