import React from "react";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("user"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}

function loginUser(dispatch, login, password, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);

  if (!!login && !!password) {
    fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user/query", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login }),
    })
      .then((Response) => Response.json())
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(response[0]));
          setError(null);
          setIsLoading(false);
          dispatch({ type: "LOGIN_SUCCESS" });

          history.push("/app/calls");
        } else {
          console.log("unable to inser");
        }
      });
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

function createUser(dispatch, data, history) {
  fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((Response) => Response.json())
    .then((response) => {
      if (response.user) {
        localStorage.setItem("user", JSON.stringify(response.user));
        dispatch({ type: "LOGIN_SUCCESS" });
        history.push("/app/calls");
      } else {
        console.log("unable to inser");
      }
    });
}

function getContacts(setData, setLoading) {
  setLoading(true);
  fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((Response) => Response.json())
    .then((response) => {
      if (response) {
        setData(response.users);
        setLoading(false);
      } else {
        console.log("unable to inser");
        setLoading(false);
      }
    });
}

function getUserById(id, setUser) {
  fetch("https://teachit-api.herokuapp.com/teachit/api/v1/user/query", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: id }),
  })
    .then((Response) => Response.json())
    .then((response) => {
      if (response) {
        setUser(response[0]);
      } else {
        console.log("unable to inser");
      }
    });
}

function signOut(dispatch, history) {
  localStorage.removeItem("user");
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}

export {
  UserProvider,
  useUserState,
  useUserDispatch,
  createUser,
  loginUser,
  getContacts,
  signOut,
  getUserById,
};
