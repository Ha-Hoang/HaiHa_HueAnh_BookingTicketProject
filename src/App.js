import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home.page";
import SignIn from "./pages/sign-in/sign-in.page";
import SignUp from "./pages/sign-up/sign-up.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
