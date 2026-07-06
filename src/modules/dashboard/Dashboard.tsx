import { FileSpreadsheet } from 'lucide-react';

function Dashboard() {
  const handleOpenExcel = () => {
    try {
      // @ts-ignore - Office might be available if running inside Excel add-in
      if (typeof window !== 'undefined' && window.Office && window.Office.context) {
        // @ts-ignore
        window.Office.onReady(() => {
          console.log("Office.js is ready. Opening new excel sheet...");
          // @ts-ignore
          if (typeof window.Excel !== 'undefined') {
            // @ts-ignore
            window.Excel.createWorkbook();
          } else {
            alert("Excel API is not available on this host.");
          }
        });
      } else {
        // Fallback for standard browsers
        console.log("Not in Office context, generating a dummy Excel sheet...");
        // Create a simple CSV content that will open natively in Excel
        const csvContent = "data:text/csv;charset=utf-8,ID,Name,Status\n1,Sample Item,Active\n";
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "erp_sync_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p className="subtitle">Welcome back to ERP Sync. Here is your overview.</p>
        </div>
      </header>
      
      <div className="dashboard-grid">
        <div className="glass-card excel-card">
          <div className="card-header">
            <div className="card-icon excel-icon">
              <FileSpreadsheet size={24} />
            </div>
            <h3>Excel Integration</h3>
          </div>
          <div className="card-body">
            <p>Connect and interact directly with your spreadsheet data using Office.js integration.</p>
            <button className="btn-primary excel-btn" onClick={handleOpenExcel}>
              Open Excel Sheet
            </button>
          </div>
        </div>

        <div className="glass-card stat-card">
          <div className="stat-value">1,248</div>
          <div className="stat-label">Total Invoices</div>
          <div className="stat-trend positive">+12.5% this month</div>
        </div>
        
        <div className="glass-card stat-card">
          <div className="stat-value">84</div>
          <div className="stat-label">Active Classes</div>
          <div className="stat-trend neutral">Stable</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;