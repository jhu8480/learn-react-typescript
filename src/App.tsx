import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Shanghai", "Tokyo", "London", "Paris"];
  const onSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={onSelectItem} />
    </div>
  );
}

export default App;
