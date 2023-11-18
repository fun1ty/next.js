import RegisterForm from "./pages/RegisterForm";
import List from "./pages/List";
import { useState } from "react";
import Modal from "./ui/Modal";

function Layout() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");

  console.log(userList);
  console.log(error);

  return (
    <div>
      <main>
        <RegisterForm
          userList={userList}
          setUserList={setUserList}
          setError={setError}
        />
        <List userList={userList} />
        {error ? <Modal errormsg={error} setError={setError} /> : null}
      </main>
    </div>
  );
}

export default Layout;
