import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzaToppings from './PizzaToppings';
import TsteeleComponent from './TsteeleComponent';
import Welcome from './Welcome';

const App = () => {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <Welcome />
      <PizzaToppings />
      <TsteeleComponent />
    </div>
  );
}

export default App
