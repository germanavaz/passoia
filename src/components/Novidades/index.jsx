import "./novidades.scss";

import novidades from "../../assets/banner-novidades.png"

function Novidades(){
    return(
        <section id="novidades">
            <h2>NOVIDADES PARA VOCÊ</h2>
            <img src={novidades} alt="" />
        </section>
    )
}

export default Novidades;