import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List";
import Details from "./components/Details";

export default function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  // При загрузке приложения один раз делается запрос по адресу:
  // https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json
  // и отрисовывается список в компоненте List
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "users.json")
      .then((response) => response.json())
      .then((data) => setList((prevState) => [...prevState, ...data]))
      .catch((e) => setError(e.message));
  }, []);

  // При клике на конкретный элемент списка в компонент Details передаются один props:
  // (объект с полями id и name) и начинается загрузка данных по адресу:
  // https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/{id}.json,
  // где {id} - это id пользователя из props.
  useEffect(() => {
    if (!userID) {
      return;
    }

    fetch(`${process.env.REACT_APP_BASE_URL}${userID}.json`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((e) => setError(e.message));
  }, [userID]);

  // ID пользователя
  const getUserID = (id) => {
    setUserID(id);
  };

  return (
    <div className="container">
      <div className="row d-flex flex-nowrap justify-content-space-around">
        <div className="col-4">
          {error && <p style={{ color: "$red - 600" }}>{error}</p>}
          {!error && <List list={list} getUserID={getUserID} />}
        </div>
        <div className="col-4">
          {userInfo && <Details userInfo={userInfo} />}
        </div>
      </div>
    </div>
  );
}
