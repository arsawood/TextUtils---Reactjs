import React, { useState } from "react";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002d4d";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <div>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/">
            <TextForm showAlert={showAlert} mode={mode} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;

