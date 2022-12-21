import React from 'react';
import '../styles/MiIntro.css';

function MiIntro() {
    return (
        <div className="contenedor">
            <section className="contenido-header">
                <section className="textos-header">
                    <h1>Our creativity is your success</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, libero.</p>
                    <a href="#learn">Learn more</a>
                </section>
                <img src={require("./../assets/PrimeraIlustracion.png")} alt="software engineer"
                />
            </section>
        </div>   
    );
};

export default MiIntro;