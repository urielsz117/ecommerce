import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

export const Register = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const generateError = (err) =>
        toast.error(err, {
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/register", {
                ...values,
            }, {
                withCredentials: true,
            });
            if (data) {
                if (data.errors) {
                    const { email, password } = data.errors;
                    if (email) generateError(email);
                    else if (password) generateError(password);
                } else {
                    navigate("/");
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='formloginregister'>
            <div className='container'>
                <h2>Registrar Cuenta</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Correo Electronico" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" placeholder="Contraseña" onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })} />
                    </div>
                    <button type="submit"> Enviar</button>
                    <span>
                        Ya tienes una cuenta ? <Link to="/login">Inicia Sesion</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}
