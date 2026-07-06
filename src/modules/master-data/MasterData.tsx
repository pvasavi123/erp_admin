
export default function MasterData() {
  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <div>
          <h1>Master Data</h1>
          <p className="subtitle">Core system entities and reference data.</p>
        </div>
        <button className="btn-secondary">Export Data</button>
      </header>
      
      <div className="glass-card full-width">
        <div className="empty-state">
          <div className="empty-icon">🗄️</div>
          <h3>Master Data Setup</h3>
          <p>Configure your core data sets here.</p>
        </div>
      </div>
    </div>
  );
}
