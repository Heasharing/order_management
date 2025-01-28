import React, { useState } from 'react';

const InvoiceTable = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, customer: 'John Doe', amount: 500, status: 'Pending' },
    { id: 2, customer: 'Jane Smith', amount: 200, status: 'Paid' },
    { id: 3, customer: 'Sam Wilson', amount: 300, status: 'Cancel' },
    { id: 4, customer: 'Chris Evans', amount: 700, status: 'Settled' },
  ]);

  const statusOptions = ['Pending', 'Paid', 'Cancel', 'Settled'];

  const handleStatusChange = (id, newStatus) => {
    setInvoices((prevInvoices) =>
      prevInvoices.map((invoice) =>
        invoice.id === id ? { ...invoice, status: newStatus } : invoice
      )
    );
  };

  return (
    <table border="1" style={{ width: '100%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id}>
            <td>{invoice.id}</td>
            <td>{invoice.customer}</td>
            <td>${invoice.amount}</td>
            <td>
              <select
                value={invoice.status}
                onChange={(e) => handleStatusChange(invoice.id, e.target.value)}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
