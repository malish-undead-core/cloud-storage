import NavBar from "./navbar/NavBar";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../actions/user";
import Disk from "./disk/Disk";
import Profile from "./profile/Profile";
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
          {!isAuth ?
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
            :
            <Routes>
              <Route path="/" element={<Disk />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
