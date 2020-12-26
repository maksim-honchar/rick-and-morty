import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavPanel from "./components/NavPanel";
import { Characters } from "./features/characters/Characters";
import { Episodes } from "./features/episodes/Episodes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <NavPanel />
          <Switch>
            <Route exact path="/" component={Characters} />
            <Route exact path="/episodes" component={Episodes} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}
