import { createContext, useState } from "react";

const userInfoContext = createContext({
  userInfo: [],
  addUserInfo: (userInput) => {},
});

export function UserInfoContextProvider(props) {
  const [userInput, setUserInput] = useState([]);

  function adduserInputHandler(userInput) {
    setUserInput((prevUserUserInput) => {
      return prevUserUserInput.concat(userInput);
    });
  }

  const context = {
    userInfo: userInput,
    addUserInfo: adduserInputHandler,
  };
  return (
    <userInfoContext.Provider value={context}>
      {props.children}
    </userInfoContext.Provider>
  );
}

export default userInfoContext;
