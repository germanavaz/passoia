// hooks -> funções especiais do react 
// useState -> controla os estados de algo na interface
import { useState } from "react"; 

import "./lancamentos.scss";

//imgs
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import base from "../../assets/base.png";
import elipsevermelho from "../../assets/elipse-vermelho.png";
import elipseazul from "../../assets/elipse-azul.png";
import elipsemarrom from "../../assets/elipse-marrom.png";
import elipsebase from "../../assets/elipse-base.png";
import imgbatom1 from "../../assets/img-batom.png";
import imgbatom2 from "../../assets/img-batom-2.png";
import imgbatom3 from "../../assets/img-batom-3.png";
import estrelas from "../../assets/estrelas.png";

function Lancamentos(){

    const [cor, setCor] = useState(azul);


    return(
        <section id="lancamentos">
            <h2>APROVEITE OS LANÇAMENTOS</h2>

            <div className="img-lateral">
                <img src={imgbatom1} alt="" />
                <img src={imgbatom2} alt="" />
                <img src={imgbatom3} alt="" />
            </div>
            <img src={cor} alt="" className="img-cor"/>

            <div className="card-lancamentos">
                <img src={estrelas} alt="" />
                <h3>Matte Premium</h3>
                <p className="sub">Cores disponíveis</p>
                <div className="mostruario">
                    <button onClick={()=>setCor(azul)} className="azul"><img src={elipseazul} alt="Ícone Azul"/></button>
                    <button onClick={()=>setCor(vermelho)} className="vermelho"><img src={elipsevermelho} alt="Ícone Vermelho"/></button>
                    <button onClick={()=>setCor(marrom)} className="marrom"><img src={elipsemarrom} alt="Ícone Marrom"/></button>
                    <button onClick={()=>setCor(base)} className="base"><img src={elipsebase} alt="Ícone Base"/></button>
                </div>

                <h4>Descrição</h4>
                <p>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</p>
            </div>
            
            
        </section>
    ) 
}

export default Lancamentos;


