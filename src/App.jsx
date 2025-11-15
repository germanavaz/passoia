import "./style.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Dicas from "./components/Dicas";
import Lancamentos from "./components/Lancamentos";
//Arquivo principal 
function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <Dicas/>
    <Lancamentos/>
    </>
  )
}

export default App;