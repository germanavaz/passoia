import "./style.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Dicas from "./components/Dicas";
import Lancamentos from "./components/Lancamentos";
import Novidades from "./components/Novidades"
import Footer from "./components/Footer";
//Arquivo principal 
function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <Dicas/>
    <Lancamentos/>
    <Novidades/>
    <Footer/>
    </>
  )
}

export default App;