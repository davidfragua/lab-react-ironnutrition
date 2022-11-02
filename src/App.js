import logo from './logo.svg';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

const [ listFood, setListFood ] = useState(foods)

const addFood = (oneFood) =>{
    const copyListFood = [...listFood]
    copyListFood.push(oneFood)
    setListFood(copyListFood)
}


  return (
    <div className="App">
      <h2>Food List</h2>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {listFood.map((eachFood, index) => {
        return (
          
          <div key={eachFood.name + index}>
              <FoodBox food={eachFood} />
            </div>

          // <div  key={eachFood.name + index} >
          //     <p>{eachFood.name}</p>
          //     <img src={eachFood.image} width={75} />
          //   </div>  
            )  
          }
          )}
          </Row>

          <AddFoodForm  newFood={addFood}/>

          </div>
  );
}

export default App;
