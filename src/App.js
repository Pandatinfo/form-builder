import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./screens/LoginScreen";
import React, { useState, useEffect } from "react";
import Dashboard from "./screens/DashboardScreen";
import AddForm from "./screens/NewAndModifyFormScreen";
import Header from "./components/Header";
import { Redirect } from "react-router-dom";
import ProfilePage from "./screens/ProfileScreen";

function App() {
  let initForm;
  if (localStorage.getItem("forms") === null) {
    initForm = [];
  } else {
    initForm = JSON.parse(localStorage.getItem("forms"));
  }

  const [forms, setForms] = useState(initForm);

  useEffect(() => {
    localStorage.setItem("forms", JSON.stringify(forms));
  }, [forms]);

  const onDelete = (form) => {
    setForms(
      forms.filter((e) => {
        return e !== form;
      })
    );
    console.log("deleted", forms);
    localStorage.setItem("forms", JSON.stringify(forms));
  };

  const addForm = (title, desc, items) => {
    const myForm = {
      title: title,
      desc: desc,
      items: items,
    };
    setForms([myForm, ...forms]);
  };

  const modifyForm = () => {
    setForms([...forms]);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
              return (
                <>
                  {localStorage.getItem("auth-token") ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Redirect to="/login" />
                  )}
                </>
              );
            }}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" render={() => <Dashboard forms={forms} onDelete={onDelete} />} />
          <Route exact path="/profile" render={() => <ProfilePage handleLogout={handleLogout} />} />
          <Route exact path="/addForm" render={() => <AddForm addForm={addForm} />} />
          <Route exact path="/modifyForm" render={() => <AddForm addForm={addForm} modifyForm={modifyForm} forms={forms} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
