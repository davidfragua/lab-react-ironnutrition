import logo from './logo.svg';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [listFood, setListFood] = useState(foods);
  const [ listFoodToShow, setListFoodToShow ] = useState(foods)

  const addFood = (oneFood) => {
    const copyListFood = [...listFood];
    copyListFood.push(oneFood);
    setListFood(copyListFood);

    const copyListFoodToShow = [...listFoodToShow]
    copyListFoodToShow.push(oneFood);
    setListFoodToShow(copyListFoodToShow)

  };

  const filteredListFood = (filterQuery) => {
      const filteredArr = listFood.filter((eachFood) =>{
        return eachFood.name.startsWith(filterQuery)
      })

      setListFoodToShow(filteredArr)
  }




  return (
    <div className="App">
      <Search filteredListFood={filteredListFood} />
      <br />
      <h2>Food List</h2>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {listFoodToShow.map((eachFood, index) => {
          return (
            <div key={eachFood.name + index}>
              <FoodBox food={eachFood} />
            </div>

            // <div  key={eachFood.name + index} >
            //     <p>{eachFood.name}</p>
            //     <img src={eachFood.image} width={75} />
            //   </div>
          );
        })}
      </Row>

      <AddFoodForm newFood={addFood} />
    </div>
  );
}

export default App;
