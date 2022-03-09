import './App.css';
import Navbar from './components/header/Navbar';
import Button from './components/Button';
import Card from './components/Card';

function clickMe(){
    alert('Hello');
}

function App(){
    return (
        <div className="app-component">
            <Navbar/>
            <div className="jumbotron">
                <div className="heading">
                    <h1>IT Support tailored for all.</h1>
                </div>
                <div className="subheading">
                    Accelerate your business growth and boost efficiency from day one with fast and effective 24/7 IT Support and Technology Solutions.
                </div>
                <div className="getInTouchBtn">
                    <Button onClick={clickMe}>
                        Get In Touch
                    </Button>    
                </div>
            </div> 
            <div>
                <Card/>
            </div>           
        </div>
    );       
    
}

export default App;
