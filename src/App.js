import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/animate.css/animate.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routerAdmin, routerMain } from "./configs/router";
import MainTemplate from "./templates/main/main.template";
import AdminTemplate from "./templates/admin/admin.template";





function App() {
  function renderRouterMain() {
    return routerMain.map((router, index) => {
      const { path, exact, Component } = router;
      return (
        <Route path={path} exact={exact} key={index}>
          <MainTemplate>
            <Component />
          </MainTemplate>
        </Route>
      );
    });
  }
  function renderRouterAdmin() {
    return routerAdmin.map((router, index) => {
      const { path, exact, Component } = router;
      return (
        <Route path={path} exact={exact} key={index}>
          <AdminTemplate>
            <Component />
          </AdminTemplate>
        </Route>
      );
    });
  }
  
  
  
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
