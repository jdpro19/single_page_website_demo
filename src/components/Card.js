import React from 'react-dom';
import '../Card.css';

function Card() {
    return(
        <div>
            <section className="container">                
                <div className="card">
                    <div className="card-img img-1">

                    </div>
                        <h2>Product Development</h2>
                        <h3>Customized applications for smooth business operation.
</h3>                    
                </div>
                <div className="card">
                    <div className="card-img img-2">

                    </div>
                        <h2>Cloud Infrastructure</h2>
                        <h3>Some text here...</h3>                    
                </div>
                <div className="card">
                    <div className="card-img img-3">

                    </div>
                        <h2>Training </h2>
                        <h3>Some text here...</h3>                    
                </div>
            </section>
        </div>
    );
}

export default Card;