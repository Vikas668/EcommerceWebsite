
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <div>Home</div>
    </div>
  );
}

export default App;
