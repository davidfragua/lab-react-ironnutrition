import logo from './logo.svg';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {

const [ listFood, setListFood ] = useState(foods)



  return (
    <div className="App">
      {listFood.map((eachFood, index) => {
        return (
          <div  key={eachFood.name + index} >
              <p>{eachFood.name}</p>
              <img src={eachFood.image} width={75} />
            </div>  
            )  
          }
          )}

<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
          </div>
  );
}

export default App;
