import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routerAdmin, routerMain } from "./configs/router";
import MainTemplate from "./templates/main/main.template";
import AdminTemplate from "./templates/admin/admin.template";
import { useDispatch } from "react-redux";
import { signInAction } from "./store/actions/auth.action";
import { SIGN_IN } from "./store/constants/auth.const";


function App() {
  function renderRouterMain() {
    return routerMain.map((router) => {
      const { path, exact, Component } = router;
      return (
        <Route path={path} exact={exact}>
          <MainTemplate>
            <Component />
          </MainTemplate>
        </Route>
      );
    });
  }
  function renderRouterAdmin() {
    return routerAdmin.map((router) => {
      const { path, exact, Component } = router;
      return (
        <Route path={path} exact={exact}>
          <AdminTemplate>
            <Component />
          </AdminTemplate>
        </Route>
      );
    });
  }
  
    // if(getLocalStorage){
    //   dispatch(signInAction(SIGN_IN), JSON.parse(getLocalStorage));
    // }
  // const dispatch = useDispatch();

  // function getLocal(){
  //   const getLocalStorage = localStorage.getItem('getLocal');
  //   if(getLocalStorage){
  //     return dispatch(signInAction(SIGN_IN), JSON.parse(getLocalStorage));
  //   }
  // }
  
  return (
    <>
      
      <BrowserRouter>
        <Switch>
          {renderRouterMain()}
          {renderRouterAdmin()}
        </Switch>
      </BrowserRouter>
    </>
  );

}

export default App;
