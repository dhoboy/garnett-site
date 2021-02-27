import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import AppContent from "./AppContent";
import '@fortawesome/fontawesome-free/js/all.js';
import "./scss/app.scss";

// use basename={"garnett"} in the HashRouter
// if deploying this to gh-pages, for prod, don't need it

const App = ({ store = {} }) => {
  return (
    <Provider store={store}>
      <HashRouter hashType="noslash">
        <AppContent />
      </HashRouter>
    </Provider>
  );
}

export default App;
