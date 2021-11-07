import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Header from "./components/Header";

//pages
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
