import NavBar from "./navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../actions/user";
import './app.css'

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="wrap">
          {!isAuth &&
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
