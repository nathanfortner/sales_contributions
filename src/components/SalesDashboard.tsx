import React from 'react';
import SankeyChart from './SankeyChart';

// Define the sales data type
interface SalesData {
  [key: string]: number;
}

// Import the sales data
const salesData: SalesData = {
  "CENTER CORE": -14010504.60,
  "LEASED/MARKETPLACE/C...": -29260759.61,
  "BACKSTAGE": 461295.55,
  "MISCELLANEOUS": 37021481.40,
  "HOME": 14555537.87,
  "MENS & KIDS": 1051526.40,
  "READY TO WEAR": -4477008.44
};

const SalesDashboard: React.FC = () => {
  const totalSales = Object.values(salesData).reduce((sum: number, value: number) => sum + Math.abs(value), 0);
  const positiveSales = Object.entries(salesData)
    .filter(([_, value]) => value > 0)
    .reduce((sum: number, [_, value]) => sum + value, 0);
  const negativeSales = Object.entries(salesData)
    .filter(([_, value]) => value < 0)
    .reduce((sum: number, [_, value]) => sum + Math.abs(value), 0);

  return (
    <div className="sales-dashboard">
      <div className="dashboard-header">
        <h2>Sales Contributions Dashboard</h2>
        <p>Comprehensive overview of sales performance across all categories</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Volume</h3>
          <p className="stat-value">${totalSales.toLocaleString()}</p>
        </div>
        <div className="stat-card positive">
          <h3>Positive Sales</h3>
          <p className="stat-value">${positiveSales.toLocaleString()}</p>
        </div>
        <div className="stat-card negative">
          <h3>Negative Sales</h3>
          <p className="stat-value">${negativeSales.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Net Position</h3>
          <p className="stat-value">${(positiveSales - negativeSales).toLocaleString()}</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>Sales Flow Visualization</h3>
        <div className="chart-container">
          <SankeyChart data={salesData} />
        </div>
      </div>

      <div className="table-section">
        <h3>Detailed Sales Breakdown</h3>
        <div className="table-container">
          <table className="sales-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Sales Amount</th>
                <th>Percentage</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(salesData).map(([category, value]) => (
                <tr key={category} className={value >= 0 ? 'positive-row' : 'negative-row'}>
                  <td>{category}</td>
                  <td className={value >= 0 ? 'positive' : 'negative'}>
                    ${Math.abs(value).toLocaleString()}
                  </td>
                  <td>{((Math.abs(value) / totalSales) * 100).toFixed(1)}%</td>
                  <td>
                    <span className={`status ${value >= 0 ? 'positive' : 'negative'}`}>
                      {value >= 0 ? 'Positive' : 'Negative'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard; 