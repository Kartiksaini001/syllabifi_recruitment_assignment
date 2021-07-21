import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Auth } from "./components";

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Auth} />
          {/* <Route path="/auth" component={Auth} /> */}
          {/* <Route path="/" component={Home} />
          <Route path="/events/:id" component={Events} />
          <Route path="/resources/:id" component={Resources} />
          <Route path="/team" component={OurTeam} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
