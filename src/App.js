import './App.css';
import Navbar from './components/header/Navbar';

function App(){
    return (
        <div className="app-component">
            <Navbar/>
            <h3>This text is inside a component..</h3>
        </div>
    );       
    
}

export default App;