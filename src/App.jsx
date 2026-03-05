import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Leads from "./pages/Leads";
import Loans from "./pages/Loans";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// Uncomment these and add the corresponding files when you implement these pages
// import Risk from "./pages/Risk";
// import Reports from "./pages/Reports";
// import Users from "./pages/admin/Users";
// import Roles from "./pages/admin/Roles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Main Application Routes wrapped in Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/loans" element={<Loans />} />
              {/* <Route path="/risk" element={<Risk />} /> */}
              {/* <Route path="/reports" element={<Reports />} /> */}
              {/* <Route path="/admin/users" element={<Users />} /> */}
              {/* <Route path="/admin/roles" element={<Roles />} /> */}
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;