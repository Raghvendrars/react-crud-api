import logo from './logo.svg';
import './App.css';
import Home from  "./Components/Home";
import AddData from "./Components/AddData";
import EditData from "./Components/EditData";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adddata" component={AddData} />
          <Route exact path="/editdata/:id" component={EditData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
