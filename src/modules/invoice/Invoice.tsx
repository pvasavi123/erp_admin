
export default function Invoice() {
  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <div>
          <h1>Invoices</h1>
          <p className="subtitle">Manage and track all your invoices.</p>
        </div>
        <button className="btn-primary">Create Invoice</button>
      </header>
      
      <div className="glass-card full-width">
        <div className="empty-state">
          <div className="empty-icon">📄</div>
          <h3>No invoices yet</h3>
          <p>Create your first invoice to get started.</p>
        </div>
      </div>
    </div>
  );
}
