import ReactDom from "react-dom";
import App from './App.js';
import './index.css';
import './App.css';

ReactDom.render(
    <div className="app-component">        
        <App/>
    </div>
    , document.getElementById('root')
);