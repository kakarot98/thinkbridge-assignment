import logo from './logo.svg';
import './App.css';
import List from './components/List'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>Inventory Management</h1>
      </div>
      <div className='inventory-container'>
        <h3>Inventory List</h3>
        <div className="list-container">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
