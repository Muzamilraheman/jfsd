import "./App.css";
import Land from "./pages/Land";
import Register from "./components/Register";
import Login from './components/Login';
import Das from './/components/Dashboard'
import Edu from './components/EducationLoan'
import Hou from './components/HouseLoan'
import Gol from './components/GoldLoan'
import Cro from './components/CropLoan'
import Admin from './components/AminDashBoard'
import Adminuser from './components/AdminUser'
import Recov from './components/Adminrecovary'
import Muz from './components/RequestGold'
import Rah from './components/RequestHouse'
import Raj from './components/RequestEduaction'
import Cp from './components/RequestCrop'
import Pay from './components/payment'
import Ga from './components/ApplyLoanGold'
import Ha from './components/ApplyLoanHouse'
import Edul from './components/ApplyLoanEdu'
import Cloan from './components/ApplyLoanCrop'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Land />} />
          <Route exact path="/payhomeloan" element={<Pay />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/applygoldloan" element={<Ga />} />
          <Route exact path="/applycrop" element={<Cloan/>} />
          <Route exact path="/applyhouseloan" element={<Ha />} />
          <Route exact path="/applyeducatioloan" element={<Edul />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dash/:id" element={<Das />} />
          <Route exact path="/education/:id" element={<Edu />} />
          <Route exact path="/house/:id" element={<Hou />} />
          <Route exact path="/gold/:id" element={<Gol />} />
          <Route exact path="/crop/:id" element={<Cro />} />
          <Route exact path="/admin/dash" element={<Admin />} />
          <Route exact path="/admin/users" element={<Adminuser />} />
          <Route exact path="/admin/recover" element={<Recov />} />
          <Route exact path="/admin/admingold" element={<Muz />} />
          <Route exact path="/admin/adminhouse" element={<Rah />} />
          <Route exact path="/admin/adminedu" element={<Raj />} />
          <Route exact path="/admin/admincrop" element={<Cp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
