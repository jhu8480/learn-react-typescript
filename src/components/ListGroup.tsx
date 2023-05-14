function ListGroup() {
  let items = ["New York", "Shanghai", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>City List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
