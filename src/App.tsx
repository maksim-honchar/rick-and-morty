import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Characters } from "./features/characters/Characters";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Characters} />
        </Switch>
      </Router>
    </div>
  );
}
