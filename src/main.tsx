import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {auth, db} from "./firebase";

export const Context = React.createContext({auth, db});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Context.Provider value={{auth, db}}>
      <App />
  </Context.Provider>
)
