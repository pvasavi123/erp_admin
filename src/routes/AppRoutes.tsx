import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../modules/dashboard/Dashboard";
import Invoice from "../modules/invoice/Invoice";
import MasterData from "../modules/master-data/MasterData";
import ClassData from "../modules/class-data/ClassData";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/master-data" element={<MasterData />} />
          <Route path="/class-data" element={<ClassData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}