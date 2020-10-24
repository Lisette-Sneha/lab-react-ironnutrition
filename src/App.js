import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';

function App() {
  return (
    <div>
      {/* <Foodbox /> */}
      {foods.map((food) => {
        return <Foodbox food={food} />;
      })}
    </div>
  );
}

export default App;
