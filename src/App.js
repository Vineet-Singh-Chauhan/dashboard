//CSS
import './App.css';
import './assets/styles/dark.css'

import { userInputs,productInputs } from './assets/datasources/formsource';

//pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Todol from './pages/todo/Todol';

//react router dom 
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
//context
import { DarkModeContext } from './assets/context/darkModecontext';

import {useContext} from "react"
import {AuthContext} from "./assets/context/AuthContext"


function App() {
  
  //context
  const {darkMode} = useContext(DarkModeContext)
 
   //context
   const {currentUser} = useContext(AuthContext)
  

 
  const RequireAuth = ({children})=>{
    return  currentUser ? children :<Navigate to="/login"/>;
  }
  
  return (
    <>
    <div className={darkMode?"app dark":"app"}>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route  path="login" element={<Login />} />
        <Route index element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="users">
          <Route index element={<RequireAuth><List/></RequireAuth>}/>
          <Route path=":userId" element={<RequireAuth><Single/></RequireAuth>}/>
          <Route path="new" element={<RequireAuth><New inputs = {userInputs} title="Add new User"/></RequireAuth>}/>
        </Route>
        <Route path="products">
          <Route index element={<RequireAuth><List/></RequireAuth>}/>
          <Route path=":productId" element={<RequireAuth><Single/></RequireAuth>}/>
          <Route path="new" element={<RequireAuth><New inputs = {productInputs} title="Add new product"/></RequireAuth>}/>
        </Route>
        <Route path="todo">
          <Route index element={<RequireAuth><Todol/></RequireAuth>}/>
          <Route path=":productId" element={<RequireAuth><Single/></RequireAuth>}/>
          <Route path="new" element={<RequireAuth><New inputs = {productInputs} title="Add new product"/></RequireAuth>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>

    </>
  );
}

export default App;
