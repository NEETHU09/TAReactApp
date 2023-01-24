import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, //replaces "Switch" used till v5 
  Route,
} from "react-router-dom";
import LoginPage from "./components/login/LoginPage";

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
