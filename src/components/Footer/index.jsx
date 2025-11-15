import "./footer.scss";

import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import instagram from "../../assets/icon-instagram.png";
import facebook from "../../assets/icon-facebook.png";
import youtube from "../../assets/icon-youtube.png";
import twitter from "../../assets/icon-twitter.png";

function Footer(){
    return(
        <footer id="footer">
            <section className="atendimento">
                <h3>ATENDIMENTO</h3>
                <ul>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                    <li><a href="#">Nossas Lojas</a></li>
                </ul>               
            </section>
            <section className="pagamento">
                <h3>FORMAS DE PAGAMENTO</h3>
                <ul>
                    <li><img src={mastercard} alt="Icone Mastercard" /></li>
                    <li><img src={visa} alt="Icone Visa" /></li>
                    <li><img src={pix} alt="Icone Pix" /></li>
                    <li><img src={boleto} alt="Icone Boleto" /></li>
                </ul>
            </section>

            <section className="redes">
                <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
                <div className="icons">
                    <img src={instagram} alt="Icone Instagram" />
                    <img src={facebook} alt="Icone FAcebook" />
                    <img src={youtube} alt="Icone Youtube" />
                    <img src={twitter} alt="Icone Twitter" />
                </div>
            </section>
        </footer>
    )
}

export default Footer;