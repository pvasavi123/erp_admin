import React, { useState } from 'react';
import { toast } from 'sonner';
import { useAppState } from '../../context/AppContext';

export default function MasterData() {
  const { state, dispatch } = useAppState();
  const { accounts } = state;

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All types');

  const [accId, setAccId] = useState('');
  const [accName, setAccName] = useState('');
  const [accType, setAccType] = useState('Asset');

  const filteredAccounts = accounts.filter(acc => {
    const matchesSearch = acc.name.toLowerCase().includes(searchQuery.toLowerCase()) || acc.id.includes(searchQuery);
    const matchesType = typeFilter === 'All types' || acc.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const handleSaveAccount = () => {
    if (!accId || !accName) {
      toast.error('Account ID and Name are required');
      return;
    }
    
    dispatch({
      type: 'ADD_ACCOUNT',
      payload: {
        id: accId,
        name: accName,
        type: accType,
        balance: '$0.00',
        status: 'Active'
      }
    });
    
    setIsModalOpen(false);
    setAccId('');
    setAccName('');
    setAccType('Asset');
    toast.success('Account successfully added!');
  };

  return (
    <div className="page-container fade-in" style={{ padding: '24px 0' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-dark)', margin: 0 }}>Master Data</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '8px' }}>
          Manage your chart of accounts and synchronizations.
        </p>
      </header>
      
      <div style={{ background: 'white', borderRadius: '8px', border: '1px solid var(--border-light)', overflow: 'hidden' }}>
        <div className="data-toolbar">
          <input 
            type="text" 
            placeholder="Search accounts..." 
            className="search-input" 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <select 
            className="toolbar-select"
            value={typeFilter}
            onChange={e => setTypeFilter(e.target.value)}
          >
            <option>All types</option>
            <option>Asset</option>
            <option>Liability</option>
            <option>Equity</option>
            <option>Revenue</option>
            <option>Expense</option>
          </select>
          <div style={{ flex: 1 }}></div>
          <button className="btn-outline" onClick={() => toast.success('Exporting Master Data to CSV...')}>Export</button>
          <button className="btn-outline" onClick={() => {
            const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
            toast.promise(promise, {
              loading: 'Syncing with QuickBooks Online...',
              success: 'Master Data successfully pulled from QBO!',
              error: 'Error syncing with QBO',
            });
          }}>Pull Master Data from QBO</button>
          <button className="btn-primary-sm" onClick={() => setIsModalOpen(true)}>Add Account</button>
        </div>
        
        <table className="data-table">
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Account Name</th>
              <th>Type</th>
              <th>Balance</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredAccounts.map((acc, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{acc.id}</td>
                <td>{acc.name}</td>
                <td>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.75rem', 
                    fontWeight: 600,
                    background: acc.type === 'Asset' ? '#e0e7ff' : acc.type === 'Liability' ? '#fee2e2' : '#dcfce7',
                    color: acc.type === 'Asset' ? '#3730a3' : acc.type === 'Liability' ? '#991b1b' : '#166534'
                  }}>
                    {acc.type}
                  </span>
                </td>
                <td>{acc.balance}</td>
                <td><span className="status-active">{acc.status}</span></td>
                <td style={{ textAlign: 'right' }}><button className="action-btn">Edit</button></td>
              </tr>
            ))}
            {filteredAccounts.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                  No accounts found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Account</h3>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', marginBottom: '16px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Account ID</label>
                  <input type="text" placeholder="e.g. 4000" value={accId} onChange={e => setAccId(e.target.value)} />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Account Name</label>
                  <input type="text" placeholder="e.g. Sales Revenue" value={accName} onChange={e => setAccName(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <select value={accType} onChange={e => setAccType(e.target.value)}>
                  <option>Asset</option>
                  <option>Liability</option>
                  <option>Equity</option>
                  <option>Revenue</option>
                  <option>Expense</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-outline" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn-primary-sm" onClick={handleSaveAccount}>Save Account</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
