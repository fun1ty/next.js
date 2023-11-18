import classes from "../ui/Modal.module.css";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

function Modal({ errormsg, setError }) {
  function okayClick() {
    console.log("btn클릭");
    setError("");
  }
  return ReactDOM.createPortal(
    <div className={classes.modalBackground}>
      <div className={classes.modal}>
        <Card>
          <h2 className={classes.modalTitle}>Invalid value</h2>
          <h3 className={classes.content}>{errormsg}</h3>
          <div className={classes.action}>
            <Button type="button" clickHandler={okayClick}>
              Okay
            </Button>
          </div>
        </Card>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
