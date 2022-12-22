import { useNavigate } from 'react-router-dom';

import MyServices from '../components/MyServices';
import MiIntro from '../components/MiIntro';
import TheFooter from '../components/TheFooter';

//Styles
import '../styles/LogOut.css';

function CheckedView() {

    const navigate = useNavigate();

    function logOut(){
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div>
            <div id="logout" className="bg-dark m-0 pt-0 d-flex justify-content-end pr-6">
                <button
                    //className="btn my-2 my-sm-0"
                    type="submit"
                    onClick={logOut}
                >LogOut</button>
            </div>

            <h1>This is an Checked page</h1>
            <MiIntro></MiIntro>
            <MyServices></MyServices>
            <TheFooter></TheFooter>
        </div>

    )
}

export default CheckedView;
