import Home from "./components/Home";
import Status from "./components/Status";
import Board from "./components/Board"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/menu.css"
function App() {
  return (
    <div className="game">    
        <header className="bg-primary">
            <h1>Memory Game</h1>
        </header>  
        <Home/>
        <Status/>
        <footer className="bg-dark">
          <p>CopyRight&copy;Created by DPpoject</p>          
        </footer>
    </div>
  );
}

export default App;
