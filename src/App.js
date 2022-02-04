import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/menu.css"
function App() {
  return (
    <div className="game">    
        <header className="bg-dark">
            <h1>Memory Game</h1>
        </header>  
        <Home/>
        <footer className="bg-dark">
          <p>&copy;Created by DPpoject</p>          
        </footer>
    </div>
  );
}

export default App;
