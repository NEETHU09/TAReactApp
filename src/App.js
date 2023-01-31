import "./App.css";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import DashboardUser from "./components/dashboard/DashboardUser";
import DashboardAdmin from "./components/dashboard/DashboardAdmin";
import InvoicePage from "./components/invoice/InvoicePage";
import NoPage from "./components/common/NoPage";
import AppBar from "./components/common/AppBar";

const Router = ({ children }) => (
  <>
    <AppBar />
    {children}
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Router><DashboardUser /></Router>} />
        <Route path="/dashboard-admin" element={<Router><DashboardAdmin /></Router>} />
        <Route path="/invoice" element={<Router><InvoicePage /></Router>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}