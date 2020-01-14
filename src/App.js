import React from 'react';
 
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home  from './container/home'
function App() {
  return (
    <div>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/"  component={Home} />
         </div>
      </Router>
    </Provider>
  </div>
  );
}

export default App;


