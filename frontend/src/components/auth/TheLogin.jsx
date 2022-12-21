import React, { Component, useState } from 'react';
import swal from 'sweetalert';

import axios from '../../api/axios';

import '../../styles/TheLogin.css';


const baseURL = 'http://localhost:4000/api/user/login"';





function TheLogin() {
    const [currentTab, setToggleState] = useState(1);

    function selectTab(index) {
        setToggleState(index);
    };

    Component.state = {
        login: {
            email: "",
            password: "",
          },
          register: {
            username: "",
            userlastname: "",
            email: "",
            password: "",
            passwordcompare: "",
          },
    };

    const handleChange =  (event) => {
         this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        });
        
    };

    const loginUser = async () => {
        try {
            console.log(this.login)

          let response = await axios.post(baseURL, {
            email: this.login.email, 
            password: this.login.password
        });
          console.log(response.data);
          let token = response.data.tokenReturn;      
          let user = response.data.user;

          localStorage.setItem("jwt", token);
          localStorage.setItem("user", JSON.stringify(user));

          if (token) {
            swal("Éxito!!", "Login correcto", "success");
            //this.$router.push("/checked");
          }
        } catch (e) {
          swal("Oops!", "Algo salió mal!", "error");
        }
    };

    const registerUser = async () =>{
        try {
          let response = await this.$http.post('/api/user/register', this.register);

          console.log(response);
          swal("Éxito!!", "Registro correcto", "success");
          this.$router.push("/login");
          
        } catch (e) {
          swal("Oops!", "Algo salió mal con tu registro!", "error");
        }
    };
    




    return (
        <div className="the-login">

            {/* <!-- Formularios --> */}
            <div className="contenedor-formularios">
                {/* <!-- Links de los formularios --> */}
                <ul className="contenedor-tabs">
                    <li
                        className={currentTab === 1 ? "active" : ""}
                        onClick={() => selectTab(1)}
                    >
                        <a href="#iniciar-sesion">Iniciar Sesión</a>
                    </li>

                    <li
                        className={currentTab === 2 ? "active" : ""}
                        onClick={() => selectTab(2)}
                    >
                        <a href="#registrarse">Registrarse</a>
                    </li>
                </ul>

                {/* <!-- Contenido de los Formularios -->
                <!-- Iniciar Sesión --> */}
                <div className={currentTab === 1 ? "" : "contenido-tab"}>
                    <div id="iniciar-sesion">
                        <h1 className='login-title'>Iniciar Sesión</h1>
                        <form action="#" method="post">
                            <div className="contenedor-input">
                                <label className="label"> <span className="req"></span> </label>
                                <input
                                    name="email"
                                    onChange={()=>handleChange()}
                                    type="email"
                                    required
                                    placeholder="Email"
                                />
                            </div>

                            <div className="contenedor-input">
                                <label className="label"> <span className="req"></span> </label>
                                <input
                                    name="password"
                                    onChange={()=>handleChange()}
                                    type="password"
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <p className="forgot"> <a href="#forgot">¿Se te olvidó la contraseña?</a></p>
                            <input
                                onClick={()=>loginUser()}
                                type="submit"
                                className="button button-block"
                                value="Iniciar Sesión"
                            />
                        </form>
                    </div>
                </div>


                {/* <!-- Registrarse --> */}
                <div className={currentTab === 2 ? "" : "contenido-tab"}>
                    <div id="registrarse">
                        <h1 className='login-title'>Registrarse</h1>
                        <form action="#" method="post">
                            <div className="fila-arriba">
                                <div className="contenedor-input">
                                    <label> <span className="req"></span> </label>
                                    <input
                                        name="username"
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        placeholder="Nombre"
                                    />
                                </div>

                                <div className="contenedor-input">
                                    <label> <span className="req"></span> </label>
                                    <input
                                        name="userlastname"
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        placeholder="Apellidos"
                                    />
                                </div>
                            </div>

                            <div className="contenedor-input">
                                <label className="label"> <span className="req"></span> </label>
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    type="email"
                                    required
                                    placeholder="Email"
                                />
                            </div>

                            <div className="contenedor-input">
                                <label className="label"> <span className="req"></span> </label>
                                <input
                                    name="password"
                                    onChange={handleChange}
                                    type="password"
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <div className="contenedor-input">
                                <label className="label"> <span className="req"></span> </label>
                                <input
                                    name="passwordcompare"
                                    onChange={handleChange}
                                    type="password"
                                    required
                                    placeholder="Repetir Contraseña"
                                />
                            </div>

                            <input
                                onClick={()=>registerUser()}
                                type="submit"
                                className="button button-block"
                                value="Registrarse"
                            />
                        </form>
                    </div>
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




