import React from 'react';
import { Form } from '@unform/web';
import '../../styles/pages/login-registration-form.css';

import Input from '../../components/Form/input';


export default function EditarPerfil() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <div className="editar-perfil">

            <Form onSubmit={handleSubmit}>
                <div id="form">
                    <div className="fields">
                        <div className="group1">
                            <Input className="input-box" type="email" name="email" placeholder="   E-mail" /><br></br>
                            <Input className="input-box" type="name" name="name" placeholder="   Nome Completo" /><br></br>
                            <Input className="input-box" type="password" name="password" placeholder="   Nova Senha" /><br></br>
                        </div>
                        <div className="group2">
                            <Input className="input-box" type="password" name="password" placeholder="   Confirmar Nova Senha" /><br></br>
                            <Input className="input-box" type="cpf" name="cpf" placeholder="   CPF" /><br></br>
                        </div>
                    </div>
                    <button className="perfil-button" type="submit">Finalizar</button><br></br>
                </div>
            </Form>

        </div>
    );
}
