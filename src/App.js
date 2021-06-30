import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home.page";
import SignIn from "./pages/sign-in/sign-in.page";
import SignUp from "./pages/sign-up/sign-up.page";
import MovieDetail from "./pages/movie-detail/movie-detail.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/moviedetail/:movieCode" exact component={MovieDetail} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
