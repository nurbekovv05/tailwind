import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Choose from "./components/Choose/Choose";
import About from "./components/AboutAs/About";
import Fresh from "./components/Fresh/Fresh";
import Cooked from "./components/Cooked/Cooked";
import Special from "./components/Special/Special";
import Happy from "./components/Happy/Happy";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Choose/>
            <About/>
            <Fresh/>
            <Cooked/>
            <Special/>
            <Happy/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;
