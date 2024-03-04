import './Card.css';

function Card() {
    return (
<div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Card 1 Text</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Card 2 Stuff</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Card 3 Stuff</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
