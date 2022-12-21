import React from 'react';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


import '../styles/MyServices.css'

function MyServices () {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);

    return (
        <section className="about-us">
            <div className="contenedor1">
                <h2 className="titulo">We provide a wide range</h2>
                <div className="contenedor-articulo">
                    <div className="articulo" data-aos="zoom-in-right">
                        <i className="bi bi-vector-pen"></i>
                        <h3>Graphic design</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                            accusamus reiciendis ab maxime animi alias ipsam ex debitis dolor
                            provident!
                        </p>
                        <a href="#read">Read more ---</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right">
                        <i className="bi bi-code-slash"></i>
                        <h3>Web design</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                            alias? Cumque placeat delectus odit architecto unde eveniet
                            accusantium velit quas.
                        </p>
                        <a href="#read">Read more ---</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right">
                        <i className="bi bi-gear"></i>
                        <h3>Video production</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                            alias? Cumque placeat delectus odit architecto unde eveniet
                            accusantium velit quas.
                        </p>
                        <a href="#read">Read more ---</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right">
                        <i className="bi bi-bar-chart"></i>
                        <h3>SEO</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                            alias? Cumque placeat delectus odit architecto unde eveniet
                            accusantium velit quas.
                        </p>
                        <a href="#read">Read more ---</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right">
                        <i className="bi bi-pie-chart"></i>
                        <h3>Digital Marketing</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                            alias? Cumque placeat delectus odit architecto unde eveniet
                            accusantium velit quas.
                        </p>
                        <a href="#read">Read more ---</a>
                    </div>

                    <div className="articulo" data-aos="zoom-in-right">
                        <i className="bi bi-chat"></i>
                        <h3>Inphografics</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                            alias? Cumque placeat delectus odit architecto unde eveniet
                            accusantium velit quas.
                        </p>
                        <a href="#read">Read more ---</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyServices;



