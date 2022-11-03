import { Divider, Input, Button } from 'antd';
import { useState } from 'react';


function AddFoodForm(props) {

    const [ nameNew, setNameNew ] = useState("")
    const [ imageNew, setImageNew ] = useState("")
    const [ caloriesNew, setCaloriesNew ] = useState(0)
    const [ servingsNew, setServingsNew ] = useState(0)

    const addFood = (event) =>{

                const foodToAdd ={
                    name: nameNew,
                    image: imageNew,
                    calories: caloriesNew,
                    servings: servingsNew
                }
           
            props.newFood(foodToAdd)
        }
    
    const handleChangeName = (event) => {
        setNameNew(event.target.value)
    }

    const handleChangeImage = (event) => {
        setImageNew(event.target.value)
    }

    const handleChangeCalories = (event) => {
        setCaloriesNew(event.target.value)
    }

    const handleChangeServings = (event) => {
        setServingsNew(event.target.value)
    }

  return (
    <div>
        <form>
        <Divider>Add Food Entry</Divider>
        <label htmlFor="name">Name</label>
        <Input value={nameNew} type="text" name="name" onChange={handleChangeName} />
        <label htmlFor="image">Image</label>
        <Input value={imageNew} type="text" name="image" onChange={handleChangeImage} />
        <label htmlFor="calories">Calories</label>
        <Input value={caloriesNew} type="number" name="calories" onChange={handleChangeCalories} />
        <label htmlFor="servings">Servings</label>
        <Input value={servingsNew} type="number" name="servings" onChange={handleChangeServings} />
        <Button type="submit" onClick={addFood}>Create</Button>
        </form>



    </div>
  )
}

export default AddFoodForm