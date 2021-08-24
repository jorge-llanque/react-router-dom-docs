import {NavLink, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Categories from "../pages/Categories";
import PrivateRoutes from './PrivateRoutes'

export default function CategoriesRouter(){
  const {url} = useRouteMatch()
  console.log(url)
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to={`${url}`} activeClassName="Active">All</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/terror`} activeClassName="Active" >Terror</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/action`} activeClassName="Active">Action</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/anime`} activeClassName="Active">Anime</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/categories" component={Categories} />
        <PrivateRoutes path="/categories/terror" component={TerrorRoutes}/>
        <Route exact path="/categories/action" >
          <h1>Category Action</h1>
        </Route>
        <Route exact path="/categories/anime" >
          <h1>Category Anime</h1>
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  )
}

function TerrorRoutes(){
  const {url} = useRouteMatch()

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="Active" to={`${url}`}>All</NavLink>
          </li>
          <li>
            <NavLink activeClassName="Active" to={`${url}/gore`}>Gore</NavLink>
          </li>
          <li>
            <NavLink activeClassName="Active" to={`${url}/suspense`} >Suspense</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={`${url}`}>
          <h3>Category Terror</h3>
        </Route>
        <Route exact path={`${url}/gore`}>
          <h3>Gore</h3>
        </Route>
        <Route exact path={`${url}/suspense`}>
          <h3>Suspense</h3>
        </Route>
        <Route path="*">
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </div>
  )
}