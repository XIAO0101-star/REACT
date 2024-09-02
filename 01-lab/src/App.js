import "./App.css";
import Alert from "./Alert.js";
import React from "react";
import japanesefood1 from "./japanese-food-3.jpeg";
import NumberBox from "./NumberBox.js";
import AlertBox from "./AlertBox.js";
import TickleBox from "./TickleBox.js";
import NumberBox1 from "./NumberBox1.js";
import RandomUser from "./RandomUser.js";
import Users from "./users.js";
function App() {
  return (
    <React.Fragment>
      <p>{sayGoodbye()}</p>
      {displayHeader()}
      <ImageFrame />
      <BorderedImageFrame img={japanesefood1} />
      <DisplayMessage whatever_message="Hello there" />
      <Alert message="danger danger will robinson!" />
      <SumOfTwo num1={2} num2={3} />
      <NumberBox initialValue={15} />
      <NumberBox1 initialValue={15} />
      <AlertBox initialMessage={"Robinson!"} />
      <TickleBox />
      <RandomUser />
      <Users />
    </React.Fragment>
  );
}

function DisplayMessage(props) {
  return <div>{props.whatever_message}</div>;
}

function sayGoodbye() {
  return "Goodbye";
}

function displayHeader() {
  return <h2>About me</h2>;
}

function ImageFrame() {
  return (
    <img
      src="https://www.w3schools.com/w3images/la.jpg"
      alt="Los Angeles"
      width="500"
      height="333"
    />
  );
}

function BorderedImageFrame(props) {
  return <img src={props.img} alt="japanesefood1" />;
}

function SumOfTwo(props) {
  return <div>{props.num1 + props.num2}</div>;
}

export default App;
