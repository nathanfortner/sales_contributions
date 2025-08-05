import React from 'react';
import ContribBarChart from './ContribBarChart';

// Import the GMM data
const gmmData = [
  {
    "GMM": "CC",
    "sales_24": 39225920.11,
    "pen_24": 14.09,
    "sales_25": 43286693.33,
    "pen_25": 16.38,
    "abs_chg": 4060773.22,
    "yoy_chng": 10.35,
    "pen_chng": 2.28,
    "contrib_yoy": 1.46
  },
  {
    "GMM": "Leased",
    "sales_24": 27208789.46,
    "pen_24": 9.78,
    "sales_25": 29276188.73,
    "pen_25": 11.08,
    "abs_chg": 2067399.27,
    "yoy_chng": 7.60,
    "pen_chng": 1.30,
    "contrib_yoy": 0.74
  },
  {
    "GMM": "Backstage",
    "sales_24": 90064.00,
    "pen_24": 0.03,
    "sales_25": 15429.12,
    "pen_25": 0.01,
    "abs_chg": -74634.88,
    "yoy_chng": -82.87,
    "pen_chng": -0.03,
    "contrib_yoy": -0.03
  },
  {
    "GMM": "Misc",
    "sales_24": 619380.28,
    "pen_24": 0.22,
    "sales_25": 476724.67,
    "pen_25": 0.18,
    "abs_chg": -142655.61,
    "yoy_chng": -23.03,
    "pen_chng": -0.04,
    "contrib_yoy": -0.05
  },
  {
    "GMM": "Home",
    "sales_24": 38980130.52,
    "pen_24": 14.01,
    "sales_25": 37498206.07,
    "pen_25": 14.19,
    "abs_chg": -1481924.45,
    "yoy_chng": -3.80,
    "pen_chng": 0.18,
    "contrib_yoy": -0.53
  },
  {
    "GMM": "Mens_Kids",
    "sales_24": 54323811.54,
    "pen_24": 19.52,
    "sales_25": 52053743.94,
    "pen_25": 19.69,
    "abs_chg": -2270067.60,
    "yoy_chng": -4.18,
    "pen_chng": 0.17,
    "contrib_yoy": -0.82
  },
  {
    "GMM": "RTW",
    "sales_24": 55959039.40,
    "pen_24": 20.11,
    "sales_25": 53105270.34,
    "pen_25": 20.09,
    "abs_chg": -2853769.06,
    "yoy_chng": -5.10,
    "pen_chng": -0.02,
    "contrib_yoy": -1.03
  },
  {
    "GMM": "Beauty",
    "sales_24": 61918791.45,
    "pen_24": 22.25,
    "sales_25": 48628261.90,
    "pen_25": 18.40,
    "abs_chg": -13290529.55,
    "yoy_chng": -21.46,
    "pen_chng": -3.85,
    "contrib_yoy": -4.78
  },
  {
    "GMM": "Total",
    "sales_24": 278325926.76,
    "pen_24": 100.00,
    "sales_25": 264340518.10,
    "pen_25": 94.98,
    "abs_chg": -13985408.66,
    "yoy_chng": -5.02,
    "pen_chng": -5.02,
    "contrib_yoy": -5.02
  }
];

const GMMDashboard: React.FC = () => {
  const totalData = gmmData.find(item => item.GMM === 'Total');
  const categoryData = gmmData.filter(item => item.GMM !== 'Total');
  
  const positiveContributors = categoryData.filter(item => item.contrib_yoy > 0);
  const negativeContributors = categoryData.filter(item => item.contrib_yoy < 0);

  return (
    <div className="gmm-dashboard">
      <div className="dashboard-header">
        <h2>GMM Sales Performance Dashboard</h2>
        <p>Year-over-year contribution analysis by General Merchandise Management category</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Sales 2024</h3>
          <p className="stat-value">${totalData?.sales_24.toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h3>Total Sales 2025</h3>
          <p className="stat-value">${totalData?.sales_25.toLocaleString()}</p>
        </div>
        <div className="stat-card negative">
          <h3>Total Change</h3>
          <p className="stat-value">${totalData?.abs_chg.toLocaleString()}</p>
        </div>
        <div className="stat-card negative">
          <h3>YoY Change</h3>
          <p className="stat-value">{totalData?.yoy_chng}%</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>Contribution to Year-over-Year Change</h3>
        <p className="chart-description">
          Shows how each GMM category contributed to the overall -5.02% year-over-year change
        </p>
        <div className="chart-container">
          <ContribBarChart data={gmmData} />
        </div>
      </div>

      <div className="insights-section">
        <div className="insight-cards">
          <div className="insight-card positive">
            <h4>Positive Contributors</h4>
            <p className="insight-count">{positiveContributors.length} categories</p>
            <ul>
              {positiveContributors.map(item => (
                <li key={item.GMM}>
                  <strong>{item.GMM}:</strong> +{item.contrib_yoy}%
                </li>
              ))}
            </ul>
          </div>
          <div className="insight-card negative">
            <h4>Negative Contributors</h4>
            <p className="insight-count">{negativeContributors.length} categories</p>
            <ul>
              {negativeContributors.map(item => (
                <li key={item.GMM}>
                  <strong>{item.GMM}:</strong> {item.contrib_yoy}%
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="table-section">
        <h3>Detailed GMM Performance</h3>
        <div className="table-container">
          <table className="gmm-table">
            <thead>
              <tr>
                <th>GMM Category</th>
                <th>Sales 2024</th>
                <th>Sales 2025</th>
                <th>Absolute Change</th>
                <th>YoY Change (%)</th>
                <th>Contribution (%)</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((item) => (
                <tr key={item.GMM} className={item.contrib_yoy >= 0 ? 'positive-row' : 'negative-row'}>
                  <td><strong>{item.GMM}</strong></td>
                  <td>${item.sales_24.toLocaleString()}</td>
                  <td>${item.sales_25.toLocaleString()}</td>
                  <td className={item.abs_chg >= 0 ? 'positive' : 'negative'}>
                    ${item.abs_chg.toLocaleString()}
                  </td>
                  <td className={item.yoy_chng >= 0 ? 'positive' : 'negative'}>
                    {item.yoy_chng}%
                  </td>
                  <td className={item.contrib_yoy >= 0 ? 'positive' : 'negative'}>
                    {item.contrib_yoy}%
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

export default GMMDashboard; 