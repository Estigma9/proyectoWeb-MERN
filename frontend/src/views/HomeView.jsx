import MyServices from '../components/MyServices';
import MiIntro from '../components/MiIntro';
import TheFooter from '../components/TheFooter';

function HomeView () {
    return (
        <div>
            <h1>This is an HomeView page</h1>
            <MiIntro></MiIntro>
            <MyServices></MyServices>
            <TheFooter></TheFooter>
        </div>

    )
}

export default HomeView;


