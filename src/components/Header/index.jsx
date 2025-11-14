import "./header.scss"
import logo from "../../assets/Logo-passoia.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="Logomarca Passoia" />
            <ul>
                <li><a href="#looks">LOOKS</a></li>
                <li><a href="#lancamentos">LANÇAMENTOS</a></li>
                <li><a href="#novidades">NOVIDADES</a></li>
            </ul>
        </header>
    )
}
export default Header;