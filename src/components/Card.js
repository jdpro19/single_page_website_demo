import React from 'react-dom';
import '../Card.css';

function Card() {
    return(
        <div>
            <section className="container">
                <div className="card">
                    <div className="card-img"></div>
                        <h1>Title goes here</h1>
                        <h3>Some text here...</h3>                    
                </div>
                <div className="card">
                    <div className="card-img"></div>
                        <h1>Title goes here</h1>
                        <h3>Some text here...</h3>                    
                </div>
                <div className="card">
                    <div className="card-img"></div>
                        <h1>Title goes here</h1>
                        <h3>Some text here...</h3>                    
                </div>
                <div className="card">
                    <div className="card-img"></div>
                        <h1>Title goes here</h1>
                        <h3>Some text here...</h3>                    
                </div>
            </section>
        </div>
    );
}

export default Card;