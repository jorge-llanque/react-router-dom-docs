import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile'
import CategoriesRouter from './CategoriesRouter'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Payments from '../pages/Payments'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

/*
BrowserRouter = Componente principal para crear un stack de rutas
Route =  Renderiza un componente en la ruta que se le indica
Switch = Ayuda a que sólo se cargue una ruta en coincidencia
propiedad exact = Sólo renderiza el componente si la ruta es exacta
*/

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/contact" component={Contact } />
        <Route exact path="/profile/:username" component={Profile}/>
        <Route path="/categories" component={CategoriesRouter} />

        <PublicRoutes exact path="/login" component={Login}/>
        <PublicRoutes exact path="/register" component={Register}/>
        <PrivateRoutes exact path="/dashboard" component={Dashboard} />
        <PrivateRoutes exact path="/payments" component={Payments} />

        <Route exact path="/" component={Home } />
        <Route path="/404" component={NotFound } />
        <Route path="*">
          <Redirect to="/404" />
        </Route>

      </Switch>
    </Router>
  )
}

