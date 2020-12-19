import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Characters } from "./features/characters/Characters";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={Characters} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}
