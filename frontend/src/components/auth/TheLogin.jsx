import React from 'react';
import '../../styles/TheLogin.css';

function TheLogin () {
    return (
        <div className="the-login">

        {/* <!-- Formularios --> */}
        <div className="contenedor-formularios">
            {/* <!-- Links de los formularios --> */}
            <ul className="contenedor-tabs">
                <li 
                  //@click="selectTab(1)"
                  //:class="{active: currentTab == 1}"
                  className="tab tab-segunda"
                >
                    <a href="#iniciar-sesion">Iniciar Sesión</a>
                </li> 

                <li 
                  //</div>@click="selectTab(2)"
                  //:className="{active: currentTab == 2}"
                  className="tab tab-primera"
                >
                    <a href="#registrarse">Registrarse</a>
                </li> 
            </ul>

            {/* <!-- Contenido de los Formularios -->
            <!-- <div className="contenido-tab"> -->
            <!-- Iniciar Sesión --> */}
            <div v-if="currentTab == 1" id="iniciar-sesion">
                <h1>Iniciar Sesión</h1>
                <form action="#" method="post">
                    <div className="contenedor-input">
                        <label className="label"> <span className="req"></span> </label>
                        <input 
                            v-model="login.email"
                            type="email"
                            required
                            placeholder="Email"
                        />
                    </div>

                    <div className="contenedor-input">
                        <label className="label"> <span className="req"></span> </label>
                        <input 
                            v-model="login.password"
                            type="password"
                            required
                            placeholder="Password"
                        />
                    </div>

                    <p className="forgot"> <a href="#">¿Se te olvidó la contraseña?</a></p>
                    <input 
                        //@click.prevent="loginUser"
                        type="submit"
                        className="button button-block"
                        value="Iniciar Sesión"
                    />
                </form>
            </div>


            {/* <!-- Registrarse --> */}
            <div v-if="currentTab == 2" id="registrarse">
                <h1>Registrarse</h1>
                <form action="#" method="post">
                    <div className="fila-arriba">
                        <div className="contenedor-input">
                            <label> <span className="req"></span> </label>
                            <input 
                                v-model="register.username"
                                type="text"
                                required
                                placeholder="Nombre"
                            />
                        </div>

                        <div className="contenedor-input">
                            <label> <span className="req"></span> </label>
                            <input 
                                v-model="register.userlastname"
                                type="text"
                                required
                                placeholder="Apellidos"
                            />
                        </div>
                    </div>

                    <div className="contenedor-input">
                        <label className="label"> <span className="req"></span> </label>
                        <input 
                            v-model="register.email"
                            type="email"
                            required
                            placeholder="Email"
                        />
                    </div>

                    <div className="contenedor-input">
                        <label className="label"> <span className="req"></span> </label>
                        <input 
                            v-model="register.password"
                            type="password"
                            required
                            placeholder="Password"
                        />
                    </div>

                    <div className="contenedor-input">
                        <label className="label"> <span className="req"></span> </label>
                        <input 
                            v-model="register.passwordcompare"
                            type="password"
                            required
                            placeholder="Repetir Contraseña"
                        />
                    </div>

                    <input 
                        //@click.prevent="registerUser"
                        type="submit"
                        className="button button-block"
                        value="Registrarse"
                    />                  
                </form>
            </div>
        </div>


        <pre>
          {/* {{login}}
          {{register}}     */}
        </pre>
        
    </div>
    );
};

export default TheLogin;


   

