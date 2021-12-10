import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // React é SPA, usando o link, em vez de usar a href e recaregar a página inteira

import logo from '../../assets/logo.svg';

import './styles.css'; // como não tem export, só queremos executar o código dentro dele, só o importamos.

/* 
    - No HTML do JavaScript usamos className, uma vez que class é uma palavra reservada do JS. 
    - npm install react-icons instala todos os icones do tipo font awesome, material icon, feather icons, etc.
*/
const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>

                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <Link to="/create-point">
                        <span> 
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um ponto e coleta</strong>
                    </Link>
                </main>
            </div>
        </div>


    );
};

export default Home;