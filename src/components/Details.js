const Details = ({ userInfo }) => {
  if (!userInfo) {
    return null;
  }

  return (
    <div className="card mt-5">
      <img src={userInfo.avatar} alt={Math.random()} className="card-img-top" />
      <div className="card-body ml-5">
        <h5 className="card-title">{userInfo.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">City: {userInfo.details.city}</li>
        <li className="list-group-item">Company: {userInfo.details.company}</li>
        <li className="list-group-item">
          Position: {userInfo.details.position}
        </li>
      </ul>
    </div>
  );
};

export default Details;
