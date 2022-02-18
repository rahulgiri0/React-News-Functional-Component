import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const App = () => {
  const apikey = REACT_APP_APIKEY;
  const pageSize = 6;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="general"
            />
          </Route>
          <Route key="general" exact path="/general">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="general"
            />
          </Route>

          <Route key="science" exact path="/science">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="science"
            />
          </Route>

          <Route key="business" exact path="/business">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="business"
            />
          </Route>
          <Route key="entertainment" exact path="/entertainment">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="entertainment"
            />
          </Route>

          <Route key="health" exact path="/health">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="health"
            />
          </Route>

          <Route key="sports" exact path="/sports">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="sports"
            />
          </Route>
          <Route key="technology" exact path="/technology">
            <News
              pageSize={pageSize}
              country="in"
              apikey={apikey}
              category="technology"
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
