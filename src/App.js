import logo from './logo.svg';
import { Card, Row, Col, Divider, Input, Button, Collapse } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [listFood, setListFood] = useState(foods);
  const [ listFoodToShow, setListFoodToShow ] = useState(foods)
  const [ formIsShowing, setFormIsShowing ] = useState(false)

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


  const deleteFood = (name) => {

      const filteredList = listFoodToShow.filter((eachFood) => {
        return eachFood.name !== name
       
      })

      setListFoodToShow(filteredList)
  }

  const toggleForm = () => {
    if(formIsShowing === true) {
      setFormIsShowing(false)
    } else {
      setFormIsShowing(true)
    }
  }



  return (
    <div className="App">
      <Divider>Search</Divider>
      <Search filteredListFood={filteredListFood} />
      <br />
      <h2>Food List</h2>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {listFoodToShow.map((eachFood, index) => {
          return (
            <div >
              <FoodBox 
              key={eachFood.name + index} 
              food={eachFood} 
              deleteFood={deleteFood}/>
              
            </div>

          );
        })}
      </Row>
        <Button onClick={toggleForm}>Add New Form</Button>
        
        {/* pendiente revisar docu de ant design para ver cómo usar Collapse */}
        {/* <Collapse in={formIsShowing}> */}
          <div>
              <AddFoodForm newFood={addFood} />
          </div>
          {/* </ Collapse> */}

    </div>
  );
}

export default App;
