import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header";

//pages
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
