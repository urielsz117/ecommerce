import logo from './logo.svg';
import './App.css';
import PaypalCheckoutButton from './components/PaypalCheckoutButton';

function App() {

  const order = {
    customer: '123456',
    total: '1200.00',
    items:[
      {
        sku: '112',
        name: 'Video Juego',
        price: '1000.00',
        quantity: 1,
        currency: 'MXN'
      },
      {
        sku: '113',
        name: 'DLC',
        price: '200.00',
        quantity: 1,
        currency: 'MXN'
      },
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <PaypalCheckoutButton order={order} />

      </header>
    </div>
  );
}

export default App;
