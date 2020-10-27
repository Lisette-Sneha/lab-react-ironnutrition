import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

const NewFoodForm = () => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="number" value="1" />
      </div>
      <div className="control">
        <button className="button is-info">+</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <NewFoodForm />
      <div>
        {/* <Foodbox /> */}
        {foods.map((food) => {
          return <FoodBox food={food} key={food.name} />;
        })}
      </div>
    </>
  );
}

export default App;
