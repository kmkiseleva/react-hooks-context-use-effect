const List = ({ list, getUserID }) => {
  return (
    <div className="card mt-5">
      <ul className="list-group list-group-flush list">
        {list.map((item) => (
          <li
            className="list-group-item"
            style={{ cursor: "pointer" }}
            key={item.id}
            id={item.id}
            onClick={() => getUserID(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
