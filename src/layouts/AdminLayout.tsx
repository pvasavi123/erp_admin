import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="main-container">
        {/* Header */}
        <header className="header">
          <Header />
        </header>

        {/* Page Content */}
        <main className="content">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;