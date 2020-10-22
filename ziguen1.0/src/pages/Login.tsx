import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Form/Login';

import logoImg from '../images/logo.png';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

import '../styles/pages/login.css'
import '../styles/pages/header.css'
import '../styles/pages/footer.css'

function Login() {
    return (
        <div id="login-page">
            <div className="top-bar">
                <img src={logoImg} alt="Logo" className="img-logo" />
                <div className="navbar">
                    <Link to="/" className="mais-vendidas-link">Página Inicial</Link>
                    <Link to="./Login" className="login-link">Cadastrar-se</Link>
                    <Link to="/" className="sobre-link">Sobre</Link>
                    <Link to="/" className="ajuda-link">Ajuda</Link>
                </div>
                <div className="field">
                    <p>Passagens Fluviais</p>
                </div>
            </div>

            

            <div className="footer">
                <p>Nossas redes sociais</p>
                <img src={instagramImg} alt="Instagram" className="instagram-logo" />
                <img src={facebookImg} alt="Facebook" className="facebook-logo" />
                <p className="hr"></p>
                <p className="space"></p>
                <p>© 2020 - Ziguen - Vendas de Passagens Fluviais</p>
            </div>
        </div>
    )
}

export default Login;