import classes from "../ui/Buttom.module.css";

function Button(props) {
  return (
    <button className={classes.button} onClick={props.clickHandler}>
      {props.children}
    </button>
  );
}

export default Button;
