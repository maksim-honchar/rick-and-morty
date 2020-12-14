import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";

export default function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Router>
        <Link to="/">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Router>
    </div>
  );
}
