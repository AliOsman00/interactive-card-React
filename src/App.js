import './App.css';

function App() {
  return (
    <div className="App">
        <div className="card-container">
          <div className="image-container">
            <div className="image-front">
              <div className="photo-circles">
                <span className="photo-cirlce"></span>
                <span className="cirlce"></span>
              </div>
              <p className="number-card">0000 0000 0000 0000</p>
            <div className="card-name-date">
              <p className="card-name">Jane Appleseed</p>
              <p className='card-date'>00/00</p>
            </div>
            </div>
          </div>
          <div className="image-back">
            <p className="cvc-code">000</p>
          </div>
        </div>
        <div className="card-input">
          <form action="">
            <div className="card-data">
              <div className="cardOwnerName">
                <label className="card-name">Card holder name</label>
                <input type="text" className="owner-name" placeholder='e.g.Jane Appleseed'/>
              </div>
              <div className="cardNumber">
                <label className="card-name">Card number</label>
                <input type="number" className="card-number" placeholder='e.g.1234 5678 9123 0000'/>
              </div>
              <div className="cardDate">
                <span className="card-date">EXP.Date (MM/YY)</span>
                <span className="cvc-code">CVC</span> <br />
                <input type="number" className="card-MM" placeholder='MM'/>
                <input type="number" className="card-YY" placeholder='YY'/>
                <input type="number" className="card-CVC" placeholder='e.g.123'/>
              </div>
              <input type="submit" className="submit" value='Confirm'/>
            </div>
          </form>
        </div>
    </div>
  );
}

export default App;
