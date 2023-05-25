import ListGroup from "./components/ListGroup/ListGroup";
import Like from "./components/Like";
import { BsFillAirplaneFill } from "react-icons/bs";
import "./App.css";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];
  const heading = "Cities";
  const onSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <BsFillAirplaneFill color="red" />
      <Like />
      <ListGroup items={items} heading={heading} onSelectItem={onSelectItem} />
    </div>
  );
}

export default App;
