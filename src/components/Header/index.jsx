import "./header.scss"
import logo from "../../assets/Logo-passoia.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="Logomarca Passoia" />
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>
    )
}
export default Header;