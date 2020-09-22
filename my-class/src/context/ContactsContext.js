import React from "react";

var ContactStateContext = React.createContext();
var ContactDispatchContext = React.createContext();

function contactReducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ContactProvider({ children }) {
  var [state, dispatch] = React.useReducer(contactReducer, {
    isSidebarOpened: false,
  });
  return (
    <ContactStateContext.Provider value={state}>
      <ContactDispatchContext.Provider value={dispatch}>
        {children}
      </ContactDispatchContext.Provider>
    </ContactStateContext.Provider>
  );
}

function useLayoutState() {
  var context = React.useContext(ContactStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a ContactProvider");
  }
  return context;
}

function useLayoutDispatch() {
  var context = React.useContext(ContactDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a ContactProvider");
  }
  return context;
}

export { ContactProvider, useLayoutState, useLayoutDispatch, toggleSidebar };

// ###########################################################
function toggleSidebar(dispatch) {
  dispatch({
    type: "TOGGLE_SIDEBAR",
  });
}
