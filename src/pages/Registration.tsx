import React from 'react';
import { Link } from 'react-router-dom';
import Registration_Form from '../components/Form/Registration';

import logoImg from '../images/logo.png';
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'
import ilustracaoBarco from '../images/ilustração-barco.png'
import ilustracaoInov from '../images/ilustração-inovação.png'
import ilustracaoLocal from '../images/ilustração-localização.png'

import '../styles/pages/header.css'
import '../styles/pages/footer.css'
import '../styles/pages/login-registration.css'


function Registration() {
    return (
        <div id="registration-page">
            <div className="top-bar">
                <div className = "header">
                    <img src={logoImg} alt="Logo" className="img-logo" />
                    <div className="navbar">
                        <Link to="/" className="home-link">Home</Link>
                        <Link to="/" className="mais-vendidas-link">Mais Vendidas</Link>
                        <Link to="/" className="sobre-link">Sobre</Link>
                        <Link to="/" className="ajuda-link">Ajuda</Link>
                    </div>
                </div>
                <div className="field">
                    <b><p>PASSAGENS FLUVIAIS</p></b>
                </div>
            </div>
            

            <div className="page_filling">
                <div className="purpose">
                    <p className="purpose-text">Mover e acelerar pessoas para impulsionar o mundo de forma democrática, criativa e inovadora</p>
                    <div className="purpose-images">
                        <img className="ilustration" src={ilustracaoBarco} alt="Ilustração Barco"/>
                        <img className="ilustration" src={ilustracaoInov} alt="Ilustração Inovação"/>
                        <img className="ilustration" src={ilustracaoLocal} alt="Ilustração Localização"/>
                    </div>
                </div>
                <div className="division-bar"></div>
                <div className="login_form">
                    <Registration_Form />
                </div>
            </div>

            <div className="footer">
                <p>Barcos Parceiros</p>
                <p>&#128674; &#128674; &#128674; &#128674;</p>
                <p className="hr"></p>
                <p>Nossas redes sociais</p>
                <div className = "icones">
                    <img src={instagramImg} alt="Instagram" className="instagram-logo" />
                    <img src={facebookImg} alt="Facebook" className="facebook-logo" />
                </div>
                <p className="hr"></p>
                <p className="space"></p>
                <p>© 2020 - Ziguen - Vendas de Passagens Fluviais</p>
            </div>
        </div>
    )
}

export default Registration;