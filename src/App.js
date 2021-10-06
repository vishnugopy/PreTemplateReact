import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
