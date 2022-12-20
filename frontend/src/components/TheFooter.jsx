import React from 'react';
import '../styles/TheFooter.css';

function TheFooter () {
    return (
        <footer>
            <div className="partFooter">
                <img src="./../assets/logoEstigma.png" alt="" />
            </div>
            <div className="partFooter">
                <h4>Servicios</h4>
                <a href="#">Services 1</a>
                <a href="#">Services 2</a>
                <a href="#">Services 3</a>
            </div>
            <div className="partFooter">
                <h4>Acerca de</h4>
                <a href="#">About 1</a>
                <a href="#">About 2</a>
                <a href="#">About 3</a>
            </div>
            <div className="partFooter">
                <h4>Redes sociales</h4>
                <div className="social-media">
                    <b-icon id="b-icon" icon="facebook"></b-icon>
                    <b-icon-twitter id="b-icon"></b-icon-twitter>
                    <b-icon id="b-icon" icon="instagram"></b-icon>
                    <b-icon-youtube id="b-icon"></b-icon-youtube>
                </div>
            </div>
        </footer>  
    );
};

export default TheFooter;










