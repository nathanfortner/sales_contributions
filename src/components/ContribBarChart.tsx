import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface GMMData {
  GMM: string;
  sales_24: number;
  sales_25: number;
  abs_chg: number;
  contrib_yoy: number;
}

interface ContribBarChartProps {
  data: GMMData[];
}

const ContribBarChart: React.FC<ContribBarChartProps> = ({ data }) => {
  // Filter out the "Total" row and sort by contribution value
  const categoryData = data
    .filter(item => item.GMM !== 'Total')
    .sort((a, b) => b.contrib_yoy - a.contrib_yoy);

  // Add total change bar at the beginning
  const totalData = data.find(item => item.GMM === 'Total');
  const chartData = totalData ? [
    { 
      GMM: 'Total', 
      contrib_yoy: totalData.contrib_yoy,
      sales_24: totalData.sales_24,
      sales_25: totalData.sales_25,
      abs_chg: totalData.abs_chg
    },
    ...categoryData
  ] : categoryData;

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}>
          <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#1f2937' }}>
            <strong>{label}</strong>
          </p>
          <div style={{ fontSize: '12px', lineHeight: '1.4' }}>
            <p style={{ margin: '4px 0', color: '#6b7280' }}>
              <strong>Sales 2024:</strong> ${data.sales_24?.toLocaleString()}
            </p>
            <p style={{ margin: '4px 0', color: '#6b7280' }}>
              <strong>Sales 2025:</strong> ${data.sales_25?.toLocaleString()}
            </p>
            <p style={{ 
              margin: '4px 0', 
              color: data.abs_chg >= 0 ? '#10b981' : '#ef4444',
              fontWeight: 'bold'
            }}>
              <strong>Absolute Change:</strong> ${data.abs_chg?.toLocaleString()}
            </p>
            <p style={{ 
              margin: '4px 0', 
              color: data.contrib_yoy >= 0 ? '#10b981' : '#ef4444',
              fontWeight: 'bold'
            }}>
              <strong>Contribution:</strong> {data.contrib_yoy}%
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '70%', height: '450px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="GMM" 
            angle={-45}
            textAnchor="end"
            height={80}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={(value) => `${value}%`}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="contrib_yoy" 
            radius={[4, 4, 0, 0]}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={
                  entry.GMM === 'Total' 
                    ? '#6b7280' // Grey for total
                    : entry.contrib_yoy >= 0 
                      ? '#10b981' // Green for positive
                      : '#ef4444' // Red for negative
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContribBarChart; 