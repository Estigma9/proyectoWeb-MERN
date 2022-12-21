import React from 'react';

import '../styles/TheFooter.css';

function TheFooter () {
    return (
        <footer>
            <div className="partFooter">
                <img src={require("./../assets/logoEstigma.png")} alt="" />
            </div>
            <div className="partFooter">
                <h4>Servicios</h4>
                <a href="#services1">Services 1</a>
                <a href="#services2">Services 2</a>
                <a href="#services3">Services 3</a>
            </div>
            <div className="partFooter">
                <h4>Acerca de</h4>
                <a href="#about1">About 1</a>
                <a href="#about2">About 2</a>
                <a href="#about3">About 3</a>
            </div>
            <div className="partFooter">
                <h4>Redes sociales</h4>
                <div className="social-media">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                </div>
            </div>
        </footer>  
    );
};

export default TheFooter;










