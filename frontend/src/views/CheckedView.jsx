import MyServices from '../components/MyServices';
import MiIntro from '../components/MiIntro';
import TheFooter from '../components/TheFooter';

function CheckedView () {
    return (
        <div className="about">
            <h1>This is an Checked page</h1>
            <MiIntro></MiIntro>
            <MyServices></MyServices>
            <TheFooter></TheFooter>

        </div>

    )
}

export default CheckedView;
