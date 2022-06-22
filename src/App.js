import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
