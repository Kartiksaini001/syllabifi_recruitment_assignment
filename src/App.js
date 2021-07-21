import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Auth, UserDetails, UserDashboard } from "./components";

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/auth" />} />
          <Route path="/auth" component={Auth} />
          <Route path="/details" component={UserDetails} />
          <Route path="/dashboard/:id" component={UserDashboard} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
