import classes from "../pages/List.module.css";

function List(props) {
  return (
    <div className={classes.list}>
      {props.userList.map((value, index) => {
        return (
          <div key={index}>
            <span>이름: {value.Username}</span>
            <span> 나이 :{value.Age}</span>
          </div>
        );
      })}
    </div>
  );
}

export default List;
