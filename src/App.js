import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  apikey = process.env.REACT_APP_APIKEY;
  pageSize = 6;

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="general"
              />
            </Route>
            <Route key="general" exact path="/general">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="general"
              />
            </Route>

            <Route key="science" exact path="/science">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="science"
              />
            </Route>

            <Route key="business" exact path="/business">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="business"
              />
            </Route>
            <Route key="entertainment" exact path="/entertainment">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="entertainment"
              />
            </Route>

            <Route key="health" exact path="/health">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="health"
              />
            </Route>

            <Route key="sports" exact path="/sports">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="sports"
              />
            </Route>
            <Route key="technology" exact path="/technology">
              <News
                pageSize={this.pageSize}
                country="in"
                apikey={this.apikey}
                category="technology"
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
