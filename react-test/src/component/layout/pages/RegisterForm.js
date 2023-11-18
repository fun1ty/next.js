import { useRef } from "react";

import Card from "../ui/Card";
import classes from "../pages/RegisterForm.module.css";
import Button from "../ui/Button";

function RegisterForm(props) {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    console.log(event);
    const usernameInput = usernameInputRef.current.value;
    const ageInput = ageInputRef.current.value;

    console.log(usernameInput);
    console.log(ageInput);

    if (usernameInput === "" || ageInput === "") {
      props.setError("이름 혹은 나이를 입력해주세요");
      return;
    } else if (!isNaN(usernameInput)) {
      props.setError("글자를 입력해주세요");
      return;
    } else if (isNaN(ageInput)) {
      props.setError("숫자를 입력해주세요");
      return;
    }

    const userData = {
      Username: usernameInput,
      Age: ageInput,
    };

    props.setUserList([...props.userList, userData]);
  }
  return (
    <>
      <Card>
        <form className={classes.registerForm} onSubmit={submitHandler}>
          <div className={classes.inputItem}>
            <label htmlFor="username">Username</label>
            <input type="text" required id="username" ref={usernameInputRef} />
          </div>
          <div className={classes.inputItem}>
            <label htmlFor="age">Age(Years)</label>
            <input type="text" required id="age" ref={ageInputRef} />
          </div>

          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default RegisterForm;
