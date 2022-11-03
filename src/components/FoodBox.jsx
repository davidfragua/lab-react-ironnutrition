import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props) {

 

  const handleDeleteClick = () => {
      // tenemos name
    props.deleteFood(props.food.name)
  }
  
  return (
    <Col>
      <Card
      title={props.food.name}
      style={{ width: 230, height: 300, margin: 10 }}
      >
    <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories} </p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDeleteClick}> Delete </Button>
        {/* no he conseguido que funcionara al traer la función con props. He intentado varias cosas pero nada  */}
        {/* <Button type="primary" > Delete </Button> */}


    </Card>
     </Col>


  )
}

export default FoodBox