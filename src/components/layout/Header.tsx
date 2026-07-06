import { Bell, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="admin-header glass-card">
      <div className="header-search">
        {/* Placeholder for search */}
      </div>
      <div className="header-actions">
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="profile-btn">
          <UserCircle size={24} />
          <span>Admin User</span>
        </button>
      </div>
    </header>
  );
};

export default Header;